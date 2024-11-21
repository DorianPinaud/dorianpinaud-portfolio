import React, { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Konva from 'konva';

interface Props {
    nbrGridCells: number,
    pixelByCell: number,
    circleArea: number
}

export default function Sandbox({ nbrGridCells, pixelByCell, circleArea }: Props) {

    let isPainting: boolean = false

    const containerRef = useRef(null);

    function pos2Index({ x, y }: Pos): Pos {
        return { x: Math.floor(x / pixelByCell), y: Math.floor(y / pixelByCell) }
    }

    function index2Pos({ x, y }: Pos): Pos {
        return { x: x * pixelByCell, y: y * pixelByCell }
    }

    type Pos = {
        x: number;
        y: number;
    };

    type GridCell = {
        pos: Pos;
        value: number;
        shape: Konva.Rect;
    };

    const createGrid = (layer: Konva.Layer): GridCell[][] => {
        return [...Array(nbrGridCells)].fill(null).map((_, j) => [...Array(nbrGridCells).fill(null).map((_, i) => {
            const { x, y } = index2Pos({ x: i, y: j })
            const ret = {
                pos: {
                    x: i,
                    y: j
                },
                value: 0,
                shape: new Konva.Rect({
                    x: x,
                    y: y,
                    width: pixelByCell,
                    height: pixelByCell,
                    visible: false,
                    fill: "white",
                })

            }

            ret.shape.on("mouseup", function (e) {
                isPainting = false;
            });

            layer.add(ret.shape);
            return ret;
        })])
    }

    const createStateGrid = () => {
        return [...Array(nbrGridCells)].fill(null).map((_, i) => [...Array(nbrGridCells).fill(0)])
    }

    const paintCircle = (grid: GridCell[][], { x, y }: Pos) => {
        for (var j of Array(circleArea).keys()) {
            for (var i of Array(circleArea).keys()) {
                const r = 0.785398;
                const a: number = Math.floor(Math.sin(r) * (i) + Math.cos(r) * (j)) + y;
                const b: number = Math.floor(Math.cos(r) * (i) - Math.sin(r) * (j)) + x;
                if (a >= 0 && a < nbrGridCells && b >= 0 && b < nbrGridCells) {
                    grid[a][b].value = (Date.now() / 100) % 360;
                }
            }
        }
    }


    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const stage = new Konva.Stage({
            container: containerRef.current,
            width: nbrGridCells * pixelByCell,
            height: nbrGridCells * pixelByCell,
        });
        const bkLayer = new Konva.Layer();
        stage.add(bkLayer)
        const layer = new Konva.Layer();
        stage.add(layer);
        const grid = createGrid(layer);

        const background = new Konva.Rect({
            x: 0, y: 0,
            width: nbrGridCells * pixelByCell,
            height: nbrGridCells * pixelByCell,
            fill: "rgb(51 48 39)",
        })
        bkLayer.add(background);

        background.on("mousedown", function (e) {
            const position = e.target.getStage()?.getRelativePointerPosition()
            if (position) {
                paintCircle(grid, pos2Index(position))
                isPainting = true
            }
        });

        background.on("touchstart", function (e) {
            const position = e.target.getStage()?.getRelativePointerPosition()
            if (position) {
                paintCircle(grid, pos2Index(position))
                isPainting = true
            }
        });


        background.on("mouseup", function (e) {
            isPainting = false;
        });

        background.on("touchend", function (e) {
            isPainting = false;
        });

        background.on("mousemove", function (e) {
            const position = e.target.getStage()?.getRelativePointerPosition()
            if (isPainting && position) {
                paintCircle(grid, pos2Index(position));
            }
        });

        background.on("touchmove", function (e) {
            const position = e.target.getStage()?.getRelativePointerPosition()
            if (isPainting && position) {
                paintCircle(grid, pos2Index(position));
            }
        });

        setInterval(() => {
            grid.map((a) => {
                a.map((b) => {
                    if (b.value > 0 && !b.shape.isVisible()) {
                        b.shape.fill(`hsl(${b.value} 40% 50%)`)
                        b.shape.visible(true);
                    }
                    else if (b.value == 0 && b.shape.isVisible()) {
                        b.shape.visible(false);
                    }
                })
            })
        }, 30)

        setInterval(() => {
            const newState = createStateGrid();
            grid.map((a, j) => {
                a.map((_, i) => {
                    if (j < (nbrGridCells - 1) && grid[j][i].value > 0 && grid[j + 1][i].value == 0) {
                        newState[j + 1][i] = grid[j][i].value;
                        newState[j][i] = 0;
                    }
                    else if (grid[j][i].value > 0) {
                        newState[j][i] = grid[j][i].value
                    }
                })
            });

            newState.map((a, j) => {
                a.map((b, i) => {
                    grid[j][i].value = b
                })
            })

        }, 30)

        return () => {
            stage.destroy();
        };

    }, []);

    return (
        <div className="sandbox">
            <h1>My Mini Project...</h1>
            <h3>Falling-Sand (Click to make the sand fall)</h3>
            <div ref={containerRef} className="sandbox-area" style={{ width: `${nbrGridCells * pixelByCell + 20}px`, height: `${nbrGridCells * pixelByCell + 20}px` }} />
        </div>
    );
}
