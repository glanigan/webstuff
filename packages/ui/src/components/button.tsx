import { ReactNode, RefObject } from 'react';

export function Button({ ref, children, type, onClick, href }: {
    ref?: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>;
    type?: 'button' | 'submit';
    href?: string;
    onClick?: ()=>void;
    children: ReactNode
}){
    const isLink = !!href;
    const Element = isLink ? 'a' : 'button';
    const elementProps = isLink ? { href } : { type: type ?? 'button'}

    return (
        <Element ref={ref as any} className='border py-1 px-4 rounded-full cursor-pointer' onClick={onClick} {...elementProps}>
            {children}
        </Element>
    )
}