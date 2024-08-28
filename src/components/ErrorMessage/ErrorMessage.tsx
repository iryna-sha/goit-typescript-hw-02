import s from './ErrorMessage.module.css'

export const ErrorMessage: React.FC = () => {
    return (
        <div className={s.error}>
            <p>Failed to fetch images. Please try again later.</p>
        </div>
    )
}


