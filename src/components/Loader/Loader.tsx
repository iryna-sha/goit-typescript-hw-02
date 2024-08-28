import { ThreeCircles } from 'react-loader-spinner'
import s from './Loader.module.css'
export const Loader: React.FC = () => {
    return (
        <div className={s.loader}>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}


