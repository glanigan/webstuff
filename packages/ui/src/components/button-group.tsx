import { PropsWithChildren } from "react";

export function ButtonGroup({ children }: PropsWithChildren){

    return (
        <div className="flex [&>*]:border-none border rounded-full">
            {children}
        </div>
    )
}