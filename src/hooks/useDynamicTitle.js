import { useEffect } from 'react'

export const useDynamicTitle = (title, defaultTitle = 'ShoeVista') => {

    useEffect(() => {
        document.title = title;

        return() => {
            document.title = defaultTitle;
        }
    } , [title,defaultTitle]);
}
