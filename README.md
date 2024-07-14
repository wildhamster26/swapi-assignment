# Decisions

## folder structure
I decided to go with the basic components/pages division, along with a specific folder for the context and the data fetching hook.
If the component files were longer or had some complicated logic, I would have created a custom hook for them as well, but felt it was unnecessary in this case.
Each component/page has a tsx file and a css file in a folder of their own. The folder could also include a spec file and a custom hook file to keep all relevant files in the same place.

## Pulling all people data from swapi
As the instructions said I should consider the list to be short and I could pull all data in one shot, I did.
I prefer to have everything ready in a context that can be shared across the app than go with pagination.
For the user I think it's better to have a single download at the beginning, than an ongoing download that could be frustrating.
I can then display and filter the relatively short list very quickly. As it does not use much memory it was a simple decision.

## third party libs for virtualization and responsiveness
Virtualization was chosen to be efficient on the DOM. I don't want to display the entire list when I can only render the relevant data.
`react-window` was chosen because of it's amount of downloads, last update and simplicity compared to other 4 libs. `react-virtualized-auto-sizer` was recommended by `react-window`'s author as the go to choice for it.

## Grid and a list for the catalogue
It was written in the instructions as an option and I think it's a good idea. Users should be able to decide for themselves what's more comfortable for them.

## Breaking down the components according to SRP
I wanted each component to do one thing and do it well. That's why we have the loader, the switch, the form, the list, etc. each in a standalone component.
I ran out of time, but discovered a serious mistake at the last minute, so I'll at least acknowledge it - the grid and list components should have taken children with the relevant data passed as props (`data` instead of `people` in the code, to make it generic) instead of rendering the hard coded FigureCard. It shouldn't be a complicated fix, but I'm already late...