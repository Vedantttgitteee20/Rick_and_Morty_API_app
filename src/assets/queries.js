import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        origin{
                name
        }
        id
        name
        image
        status
        species
        location {
          name
        }
      }
  }
}`

export { GET_ALL_CHARACTERS }
