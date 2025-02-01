import { PropsWithChildren } from 'react';

type ButtonProps = {
    onClick: ()=>void;
}

export function Button({ children, onClick }: PropsWithChildren<ButtonProps>){

    return (
        <button className='' onClick={onClick}>
            {children}
        </button>
    )
}