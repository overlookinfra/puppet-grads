import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  List,
  Responsive,
  Divider,
} from 'semantic-ui-react';

class App extends Component {
  imagePath = process.env.PUBLIC_URL + '/assets/'
  mobileMaxWidth = "459"
  desktopMinWidth = "460"

  responsive_image(name) {
    return (
      [
        <Responsive {...Responsive.onlyMobile}>
          <Image style={{ textAlign: "center", margin: "auto" }} alt={name} src={`${this.imagePath}${name}_mobile.jpg`} />
        </Responsive>,
        <Responsive {...Responsive.onlyTablet}>
          <Image alt={name} src={`${this.imagePath}${name}_tablet.jpg`} />
        </Responsive>,
        <Responsive {...Responsive.onlyComputer}>
          <Image alt={name} src={`${this.imagePath}${name}.jpg`} />
        </Responsive>
      ]
    )
  }

  render_interested() {
    let title = "We think you'll like what you see."
    let desc = "If you like challenges and want to apply to one of the leading automation companies in the world then we'd like to hear from you! Click below to apply."
    let button = (<Button color="yellow" as="a" href={"https://puppet.com/company/careers/jobs?gh_jid=1405357"}>
              Apply for Placement
            </Button>)

    if (((new Date()).getTime() / 1000) <  1572307200) {
        desc = "If you like challenges and want to apply to one of the leading automation companies in the world then we'd like to hear from you! Let us know you're interested by clicking below"
        button = (<Button color="yellow" as="a" href={"https://puppetbelfast.typeform.com/to/Lh3oWC"}>
            I'm interested!
        </Button>)
    } else if (((new Date()).getTime() / 1000) >  1572998400) {
        button = (<Button disabled color="yellow" as="a" href={"https://puppet.com/company/careers/jobs?gh_jid=1405357"}>
            Apply for Placement
        </Button>)
    }

    return (
      <div>
        <Header>
          {title}
        </Header>
        <p className={"info-text ui-section"} style={{ "lineHeight": "1.7" }}>
          {desc}
        </p>
        <Grid columns={1}>
          <Grid.Column>
            {button}
          </Grid.Column>
        </Grid>
      </div>
    )
  }

  render_map() {
    return (
      ["Click for map:",
        <a style={{ color: "#4183c4" }} href="https://goo.gl/maps/vfaXHAiHchm"><Icon name="map marker alternate" />Puppet Inc, 4th Floor, 40 Linenhall Street, BT2 8BA</a>
      ]
    )
  }

  render_register() {
    const title = "Puppet Open Doors"
    const date = "Date: 25th October 2018 @ 6pm"
    const desc = "We are holding a Meetup for both Graduates and Interns to get a feel for Puppet and to experience how we work here. Eat pizza, drink beer (including non-alcoholic drinks), and more importantly, have fun!"
    const desc2 = "There are plenty of fellow engineers around for a chat, and we do not believe in stupid questions here :) If you are currently studying Computer Science or Software Engineering and are interested in the Graduate/Intern positions, join us for a night of exciting activities! If we don't already have your details, Click \"I'm Interested!\" and let us know if you are attending!"
    return (
      <div className={"ui-section"}>
        <Divider />
        <Header style={{ "marginTop": "1em" }}>
          {title}
        </Header>
        <p className="date">
          {date}
        </p>
        <p className={"info-text"} style={{ "lineHeight": "1.7" }}>
          {desc}
          <br /><br />
          {desc2}
        </p>
        <Divider section />
        <p className="date">
          {this.render_map()}
        </p>
      </div>
    )
  }

  mobile_pups() {
    return (
      <Grid columns={2} style={{ textAlign: "center", margin: "auto" }}>
        <Grid.Row>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}miku_needs_you.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}rosie.jpg`} size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}poppy.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}betty.jpg`} size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}kula.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column style={{ textAlign: "center", margin: "auto" }}>
            <Image src={`${this.imagePath}darwin.jpg`} size="small" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }

  desktop_pups() {
    return (
      <Grid columns={3} divided style={{ textAlign: "center" }}>
        <Grid.Row>
          <Grid.Column>
            <Image src={`${this.imagePath}miku_needs_you.jpg`} />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}rosie.jpg`} />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}poppy.jpg`} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={`${this.imagePath}betty.jpg`} />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}kula.jpg`} />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}darwin.jpg`} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  render_pups() {
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.mobile_pups()}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.desktop_pups()}
      </Responsive>]
    )
  }

  render_meet_team() {
    const title = "Meet the Team"
    const desc = "Puppet is a dog friendly office. Miku is in most days and the others come in too from time to time."
    return (
      <div style={{ "marginTop": "2em" }} className={"ui-section"}>
        <Divider />
        <Header>
          {title}
        </Header>
        <p className={"date"}>
          {desc}
        </p>
        <p>
          {this.render_pups()}
        </p>
      </div>
    )
  }

  render_open_source() {
    const desc = "We are also an Open Source company and working with us is an excellent way to get your name out in the Open Source community."
    return (
      <p style={{ "lineHeight": "1.7" }} className={"info-text ui-section"}>
        {desc}
      </p>
    )
  }

  render_peer() {
    const desc = "At Puppet you aren't just put in the corner and expected to make Tea for the senior engineers. As a Grad/Intern you'll be placed in a team with other engineers and treated as a peer."
    const desc2 = "You'll work on real projects - it's hard work, but if you fancy the challenge we'd like to hear from you!"
    return (
      <p style={{ "marginBottom": "1em", "lineHeight": "1.7" }} className={"info-text ui-section"}>
        {desc}
        <br />
        <br />
        {desc2}
      </p>
    )
  }


  render() {
    return (
      <div className="App">
        {this.responsive_image('divider1')}
        <Header as="h1" style={{ "paddingBottom": "1em"}} dividing>Welcome to Puppet</Header>
        <br />
        <div className={"content"}>
          <Grid container style={{ 'padding': '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                {this.render_interested()}
                {this.render_meet_team()}
                <Divider />
                <Message info style={{ "marginTop": "1em" }} className={"info-text"}>
                  <Message.Header>
                    Technologies
                </Message.Header>
                  <Message.Content>
                    <p style={{ "lineHeight": "1.7" }}>
                      At Puppet, you’ll gain experience with a wide range of technologies:
                    </p>
                    <List bulleted>
                      <List.Item>Cloud/Containers (Docker, AWS, GCP, Azure, OpenStack, Kubernetes)</List.Item>
                      <List.Item>Javascript (Ember.js, React.js)</List.Item>
                      <List.Item>Backend Languages (Go, Clojure)</List.Item>
                      <List.Item>Databases (PostgreSQL, GraphQL)</List.Item>
                      <List.Item>Automated testing (Ruby, Selenium, Nightwatch)</List.Item>
                      <List.Item>DevOps and Configuration Management </List.Item>
                    </List>
                  </Message.Content>
                </Message>
                {this.render_open_source()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Responsive maxWidth={this.mobileMaxWidth}>
          <Image style={{ "textAlign": "center", "margin": "auto", "marginBottom": "2em", "marginTop": "0.5em" }} alt={"divider2"} src={`${this.imagePath}divider2_mobile.jpg`} />
        </Responsive>
        <div className={"content"}>
          <Grid container >
            <Grid.Row columns={1}>
              <Grid.Column>
                <Message info className={"info-text"}>
                  <Message.Header as="h1">
                    Fun
                  </Message.Header>
                  <Message.Content>
                    <p style={{ "lineHeight": "1.7" }}>
                      We aren’t just about the work; we like to play too! Our main headquarters is in Portland, Oregon, with the Belfast office being the second biggest in the world. It's fantastic to work here - with a city centre office location; we get up to all sorts of fun activities:
                    </p>
                    <List bulleted>
                      <List.Item>Free lunch once a week</List.Item>
                      <List.Item>Breakfast baps on Fridays</List.Item>
                      <List.Item>Fruit, snacks</List.Item>
                      <List.Item>Free beer, cider, wine etc..</List.Item>
                      <List.Item>Lego, games consoles, board games, table tennis</List.Item>
                      <List.Item>A state-of-the-art coffee machine</List.Item>
                    </List>
                  </Message.Content>
                </Message>

                {this.render_peer()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className={"content"}>
          <Grid container >
            <Grid.Row columns={1}>
              <Grid.Column>
                <Message info className={"info-text"}>
                  <Message.Header as="h1">
                    Community
                  </Message.Header>
                  <Message.Content>
                    <p style={{ "lineHeight": "1.7" }}>
                      As an Open Source company we like to get involved in the community. From hosting Meetups to Charity Days. 
                    </p>
                    <p style={{ "lineHeight": "1.7" }}>
                        We host a number of Meetups, including:
                    </p>
                    <List bulleted>
                      <List.Item>Belfast JS</List.Item>
                      <List.Item>Women Who Code</List.Item>
                      <List.Item>GDG</List.Item>
                      <List.Item>Django Girls</List.Item>
                      <List.Item>Women Tech Space</List.Item>
                    </List>
                    <p style={{ "lineHeight": "1.7" }}>
                        We also get a number of days a year free to volunteer for charities. Over last few years we have helped the likes of:
                    </p>
                    <List bulleted>
                      <List.Item>Carers NI</List.Item>
                      <List.Item>Homeless Period</List.Item>
                      <List.Item>MacMillan</List.Item>
                      <List.Item>Pride</List.Item>
                      <List.Item>SOS Bus NI</List.Item>
                    </List>
                  </Message.Content>
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <br/>
        <br/>
        {this.responsive_image('divider3')}
      </div>
    );
  }
}

export default App;
