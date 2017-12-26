import React, { Component } from 'react'
import extend from 'lodash/extend'
import { SearchkitManager,SearchkitProvider,
  SearchBox, Pagination,
  HierarchicalMenuFilter, HitsStats, NoHits,
  ResetFilters,
  ViewSwitcherHits, ViewSwitcherToggle,
  GroupedSelectedFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  ActionBar, ActionBarRow, SideBar } from 'searchkit'
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
            <SearchBox autofocus={true} searchOnChange={true}/>
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
