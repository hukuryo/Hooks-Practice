import { type } from "os"
import { useCallback, useState, useContext } from "react"



type counter = {
    showCount: () => void
}

type practiceText = {
    name: number;
    age: number;
}

export function Practice(props: practiceText) {
    const { name, age } = props;
    return(
        <div className="text-center mt-10">
            <h1 className="mb-10">Practice props</h1>
            <h4 className="font-bold mb-5">名前：{name}</h4>
            <p></p>
            <h4 className="font-bold">年齢：{age}歳</h4>
            <p></p>
        </div>
    )
}
