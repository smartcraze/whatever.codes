import React from 'react'


type Props = {
    params: Promise<{
        slug: string[]
    }>
}

async function Components({params}: Props) {
    const {slug} = await params
    console.log(slug)
  return (
        <div>
            <h1>Components</h1>
            <p>{slug.join("/")}</p>
        </div>
  )
}

export default Components