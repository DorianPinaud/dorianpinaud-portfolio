import { link } from 'fs';
import React from 'react'

interface SkillProps {
    title: string;
    content: string;
    second_content?: string;
    icon_name: string;
    text_link?: string;
    link?: string;
}

export default function Skill({ title, content, second_content, icon_name, link, text_link }: SkillProps) {
    return (
        <div className="card">
            <div className="content">
                <span>
                    <i className={icon_name}></i>
                </span>
                <h4>{title}</h4>
                <p>
                    {content}
                </p>
                {
                    second_content && <p>{second_content}</p>
                }
            </div>
            {
                text_link && link && <a href={link}>{text_link}<i className="fa-solid fa-arrow-right"></i></a>
            }
        </div>
    )
}