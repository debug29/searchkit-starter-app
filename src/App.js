import React, { Component } from 'react'
import { SearchkitManager,SearchkitProvider,
  SearchBox, 
  HitsStats,
  ResetFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  ActionBar, ActionBarRow } from 'searchkit'
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
            <SearchBox autofocus={true} searchOnChange={true} queryBuilder={QueryString}/>
          </TopBar>

        <LayoutBody>

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
