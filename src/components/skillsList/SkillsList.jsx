import "./skillsList.scss"

export default function SkillsList({id, title, active, setSelected}) {
    return (
        <div className={ active ? "skillsList active" : "skillsList"} onClick={() => setSelected(id)}>
            {title}
        </div>
    )
}
