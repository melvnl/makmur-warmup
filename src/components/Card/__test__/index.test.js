import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../index'

const data = {
            title: "book.title",
            author: "book.author",
            isbn: "book.isbn",
            numberOfPages: "book.numberOfPages",
            publishedOn: "book.publishedOn",
            country: "book.country",
            imageUrl: "book.imageUrl"
}

test("Card should render data properly", () => {
    const {container} = render(<Card title={data.title}
        author={data.author}
        isbn={data.isbn}
        numberOfPages={data.numberOfPages}
        publishedOn={data.publishedOn}
        country={data.country}
        imageUrl={data.imageUrl}  />)

    // eslint-disable-next-line testing-library/no-container
    expect(container.querySelector('.card-wrapper')).toBeInTheDocument()
})
