import React from 'react'
// @material-ui/core
import { Divider, Icon } from '@material-ui/core'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import CardBody from '../../components/Card/CardBody'
import CardFooter from '../../components/Card/CardFooter'
import Warning from '../../components/Typography/Warning'
import Danger from '../../components/Typography/Danger'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

import Accessibility from '@material-ui/icons/Accessibility'
import BarChart from '@material-ui/icons/BarChart'
import Tablet from '@material-ui/icons/Tablet'
import ChartistGraph from 'react-chartist'

import { emailsSubscriptionChart } from './chart-config/charts'

export function Dashboard() {
  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
  }

  var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value: any, index: any) {
        return index % 2 === 0 ? value : null
      },
    },
  }

  var type = 'Bar'

  return (
    <div>
      <h2>DashBoard</h2>
      <Divider />
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ color: 'black' }}>
            <CardHeader color="warning" stats={true} icon={true}>
              <CardIcon color="warning">
                <Icon>
                  <Accessibility />
                </Icon>
              </CardIcon>
            </CardHeader>
            <CardBody>Users</CardBody>
            <CardFooter stats={true}>
              <div>
                <Danger>
                  <Warning />
                </Danger>
                {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                                        Get more1 space
                                    </a> */}

                <h3 style={{ color: 'black' }}>
                  {/* 49/50 <small>GB</small> */}
                  41
                </h3>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats={true} icon={true}>
              <CardIcon color="rose">
                <Icon>info_outline</Icon>
              </CardIcon>
            </CardHeader>
            <CardBody>Balance</CardBody>
            <CardFooter stats={true}>
              <div>
                <Danger>
                  <Warning />
                </Danger>
                <h3 style={{ color: 'black' }}>105059831.31466</h3>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ color: 'black' }}>
            <CardHeader color="warning" stats={true} icon={true}>
              <CardIcon color="warning">
                <BarChart />
              </CardIcon>
            </CardHeader>
            <CardBody>24h trade Amount</CardBody>
            <CardFooter stats={true}>
              <div>
                <Danger>
                  <Warning />
                </Danger>
                <h3 style={{ color: 'black' }}>803M</h3>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ color: 'black' }}>
            <CardHeader color="info" stats={true} icon={true}>
              <CardIcon color="danger">
                <Tablet />
                {/* <Store /> */}
              </CardIcon>
            </CardHeader>
            <CardBody>Unread Articles</CardBody>
            <CardFooter stats={true}>
              <div>
                <Danger>
                  <Warning />
                </Danger>
                <h3 style={{ color: 'black' }}>31</h3>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart={true}>
            <CardHeader color="success">
              <h1 style={{ fontSize: '5vm' }}>Sign up history11</h1>
              {/* <ChartistGraph
                            className="ct-chart"
                            style={{ color: 'white' }}
                            data={dailySalesChart.data}
                            type="Line"
                            options={dailySalesChart.options}
                            // listener={dailySalesChart.animation}
                            /> */}
              <ChartistGraph data={data} options={options} type={type} />
            </CardHeader>
            <CardBody>
              <h4>Sign ups(30 dyas)</h4>
            </CardBody>
            <CardFooter chart={true}>
              <div>{/* updated 4 minutes ago */}</div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card chart={true}>
            <CardHeader color="warning">
              <h1>Deposit/Withdraw Chart</h1>
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Line"
                options={emailsSubscriptionChart.options}
                // responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                // listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>Deposit/Withdraw (30 days)</h4>
            </CardBody>
            <CardFooter chart={true}>
              <div></div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
