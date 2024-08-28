import s from './LoadMoreBtn.module.css'

interface LoadMoreBtnType {
    onClick: () => void;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnType> = ({ onClick }) => {
    return (
        <div className={s.loadBtn}>
            <button onClick={onClick}>Load more</button>
        </div>
    )
}


