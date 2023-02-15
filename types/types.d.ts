import * as React from 'react'

export type String = string

export type Number = number

export type Component = React.FC<React.ReactNode>

export type ReactElem = React.ReactElement

export type metaProps = {
    title: string,
    keyword: string,
    desc: string
}