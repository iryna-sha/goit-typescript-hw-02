import { Field, Form, Formik, FormikHelpers } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

interface SearchBarType {
    setQuery: (query: string) => void;
}

interface FormValues {
    query: string;
}

export const SearchBar: React.FC<SearchBarType> = ({ setQuery }) => {
    const initialValues: FormValues = {
        query: '',
    };
    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        if (values.query.trim() === '') {
            toast.error('Please enter a search query');
            actions.setSubmitting(false);
            return;
        }
        setQuery(values.query);
        actions.setSubmitting(false);
    }



    return (
        <header className={s.form}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name='query' placeholder='Enter search...' type='search' />
                    <button type='submit'>Search</button>
                </Form>
            </Formik>
            <Toaster />
        </header>
    )
}


