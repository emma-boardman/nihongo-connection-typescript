import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Section from "../components/Section"
import RichText from "../components/RichText"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"

import VerticalSpacing from "../components/VerticalSpacing"
import FilterContainer from "../components/FilterContainer"

interface Props {
  readonly data: ExplorePageQueryData
}

const ExplorePage: React.FC<Props> = ({ data }) => {
  const allClasses = data.allPrismicClass.edges
  const explorePageCopy = data.allPrismicExplorePage.edges[0].node.data

  return (
    <Layout>
      <Section>
        <Heading element="h1">
          {explorePageCopy.explore_page_title.text}
        </Heading>
        <RichText
          content={explorePageCopy.explore_page_introduction.html}
        ></RichText>
        <VerticalSpacing size={{_: "base"}}></VerticalSpacing>
        <FilterContainer classes={allClasses}></FilterContainer>
      </Section>
      <ReviewCarouselSection></ReviewCarouselSection>
    </Layout>
  )
}

interface ExplorePageQueryData {
  data: {
    allPrismicClass: {
      edges: {
        node: {
          uid: string
          data: {
            class_title: {
              text: string
            }
            class_type: string
            class_main_image: {
              thumbnails: {
                thumbnail: {
                  url: string
                  alt: string
                }
              }
            }
            class_duration: string
            class_location: string
            class_dates: {
              class_date(formatString: "MMMM DD YYYY"): string
            }
            class_schedule: string
            class_learning_style: string
            class_target: string
            class_1_bullet_preview: {
              text: string
            }
          }
        }
      }
    }
    allPrismicExplorePage: {
      edges: {
        node: {
          data: {
            explore_page_all_classes_title: {
              text: string
            }
            explore_page_introduction: {
              html: string
            }
            explore_page_title: {
              text: string
            }
            explore_page_no_results: {
              html: string
            }
          }
        }
      }
    }
  }
}

export const explorePageQuery = graphql`
  query ExplorePageQuery {
    allPrismicClass {
      edges {
        node {
          uid
          data {
            class_title {
              text
            }
            class_type
            class_main_image {
              thumbnails {
                thumbnail {
                  url
                  alt
                }
              }
            }
            class_duration
            class_location
            class_dates {
              class_date(formatString: "MMMM DD YYYY")
            }
            class_schedule
            class_learning_style
            class_target
            class_1_bullet_preview {
              text
            }
          }
        }
      }
    }
    allPrismicExplorePage {
      edges {
        node {
          data {
            explore_page_all_classes_title {
              text
            }
            explore_page_introduction {
              html
            }
            explore_page_title {
              text
            }
            explore_page_no_results {
              html
            }
          }
        }
      }
    }
  }
`

export default ExplorePage
