import React, { Component } from 'react'
import { SearchkitManager,SearchkitProvider,
  SearchBox, HierarchicalMenuFilter, 
  HitsStats, SideBar,
  ResetFilters,
  Layout, TopBar, LayoutBody, LayoutResults,
  ActionBar, ActionBarRow, QueryString,
  RangeFilter, Hits } from 'searchkit'
import './index.css'
import DateRangeFilter from './DateRangeFilter'

export const DATE_FIELD_NAME = 'ts_cre';

const host = "http://lgc-sandbox-dev:9200/console"
const searchkit = new SearchkitManager(host)

searchkit.addDefaultQuery(query => {
  return query.addQuery(QueryString("type:flux", null))
});

class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <div className="my-logo">Console HUB-EDI</div>
            <SearchBox autofocus={true} searchOnChange={true} queryBuilder={(query, options)=> {
              if(query){
                 return QueryString("type:flux AND " + query, options)
              } else {
                return QueryString("type:flux", options)
              }
            }}/>
          </TopBar>

        <LayoutBody>
          <SideBar>
            <HierarchicalMenuFilter fields={["typ_flu", "sou_typ_flu"]} title="Categories" id="categories"/>
            <RangeFilter
            id='event_date_filter'
            title='Event Date Filter'
            field={ DATE_FIELD_NAME }
            rangeComponent={ DateRangeFilter }
            min={ 946684800000 }
            max={ new Date().getTime() }
          />
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
             <Hits 
            mod="sk-hits-list"
            hitsPerPage={ 25 }
          />
          </LayoutResults>

          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;
