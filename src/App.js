import React, { Component } from 'react'
import { SearchkitManager,SearchkitProvider,
  SearchBox, HierarchicalMenuFilter, 
  HitsStats, SideBar,
  ResetFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  ActionBar, ActionBarRow, QueryString } from 'searchkit'
import './index.css'

const host = "http://lgc-sandbox-dev:9200/console"
const searchkit = new SearchkitManager(host)

class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <div className="my-logo">Console HUB-EDI</div>
            <SearchBox autofocus={true} searchOnChange={true} queryBuilder={(query, options)=> {
               return QueryString(query, options)
            }}/>
          </TopBar>

        <LayoutBody>
          <SideBar>
            <HierarchicalMenuFilter fields={["type"]} title="Categories" id="categories"/>
          </SideBar>
          <LayoutResults>
            <ActionBar>
              <ActionBarRow>
                <HitsStats translations={{
                  "hitstats.results_found":"{hitCount} results found"
                }}/>
              </ActionBarRow>

              <ActionBarRow>
                <ResetFilters/>
              </ActionBarRow>
            </ActionBar>
          </LayoutResults>

          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;
