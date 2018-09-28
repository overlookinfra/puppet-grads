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
  Card,
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
          <Image style={{textAlign: "center", margin: "auto"}} alt={name} src={`${this.imagePath}${name}_mobile.jpg`} />
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

  interested_mobile(title, desc, buttonText) {
    return (
      <div>
        <Header>
          {title}
        </Header>
        <p className={"info-text"}>
          {desc}
        </p>
        <Grid columns={1}>
          <Grid.Column>
            <Button disabled color="yellow" as="a" href="">
              {buttonText}
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

  interested(title, desc, buttonText) {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Description className={"info-text"}>
            {desc}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={1}>
            <Grid.Column>
              <Button disabled color="yellow" as="a" href="">
                {buttonText}
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }

  render_interested() {
    const title = "We think you'll like what you see."
    const desc = "If you like challenges and want to apply to one of the leading automation companies in the world then we'd like to hear from you!"
    const buttonText = "I'm interested!"
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.interested_mobile(title, desc, buttonText)}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.interested(title, desc, buttonText)}
      </Responsive>]
    )
  }

  render_map() {
    return (
      ["Click for map:",
      <a style={{ color: "#4183c4" }} href="https://goo.gl/maps/7tUVkcgEHLA2"><Icon name="map marker alternate" />Puppet Inc, 4th Floor, 40 Linenhall Street, BT2 8BA</a>
      ]
    )
  }

  register_mobile(title, date, desc) {
    return (
      <div>
        <Divider />
        <Header style={{ "marginTop": "1em" }}>
          {title}
        </Header>
        <p className="date">
          {date}
        </p>
        <p className={"info-text"}>
          {desc}
        </p>
        <Divider section />
        <p className="date">
          {this.render_map()}
        </p>
      </div>
    )
  }

  register(title, date, desc) {
    return (
      <Card fluid style={{ "marginTop": "2em" }}>
        <Card.Content>
          <Card.Header>
            {title}
            </Card.Header>
            <span className="date">
              {date}
            </span>
          <Card.Description className={"info-text"}>
            {desc}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.render_map()}
        </Card.Content>
      </Card>
    )
  }

  render_register() {
    const title = "Puppet Open Doors"
    const date = "Date: 25th October 2018"
    const desc = "We are holding a Meetup for both Graduates and Interns to get a feel for Puppet and to experience how we work here. Eat pizza, drink beer (including non-alcoholic drinks), and more importantly, have fun! There are plenty of fellow engineers around for a chat, and we do not believe in stupid questions here :) If you are currently studying Computer Science or Software Engineering and are interested in the Graduate/Intern positions, join us for a night of exciting activities! Click \"I'm Interested!\" and let us know if you are attending!"
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.register_mobile(title, date, desc)}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.register(title, date, desc)}
      </Responsive>]
    )
  }

  mobile_pups() {
    return (
      <Grid columns={2} style={{ textAlign: "center" }}>
        <Grid.Row>
          <Grid.Column>
            <Image src={`${this.imagePath}miku_needs_you.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}rosie.jpg`} size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={`${this.imagePath}poppy.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column>
            <Image src={`${this.imagePath}betty.jpg`} size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={`${this.imagePath}kula.jpg`} size="small" />
          </Grid.Column>
          <Grid.Column>
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

  meet_team_mobile(title, desc) {
    return (
      <div style={{ "marginTop": "2em" }}>
        <Divider />
        <Header>
          {title}
        </Header>
        <p>
          <Card.Meta>
            {desc}
          </Card.Meta>
        </p>
        <p>
          {this.render_pups()}
        </p>
      </div>
    )
  }

  meet_team(title, desc) {
    return (
      <Card fluid style={{ "marginTop": "2em", "marginBottom": "1em" }}>
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            {desc}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {this.render_pups()}
        </Card.Content>
      </Card>
    )
  }

  render_meet_team() {
    const title = "Meet the Team"
    const desc = "Puppet is a dog friendly office. Miku is in most days and the others come in too from time to time."
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.meet_team_mobile(title, desc)}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.meet_team(title, desc)}
      </Responsive>]
    )
  }

  open_source_mobile(desc) {
    return (
      <p style={{ "marginBottom": "1em" }} className={"info-text"}>
        {desc}
      </p>
    )
  }

  open_source(desc) {
    return (
      <Card fluid style={{ "marginTop": "2em", "marginBottom": "1em" }}>
        <Card.Content className={"info-text"}>
         {desc}
        </Card.Content>
      </Card>
    )
  }

  render_open_source() {
    const desc = "We are also an Open Source company and working with us is an excellent way to get your name out in the Open Source community."
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.open_source_mobile(desc)}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.open_source(desc)}
      </Responsive>]
    )
  }

  peer_mobile(desc, desc2) {
    return (
      <p  style={{"marginBottom": "1em" }} className={"info-text"}>
        {desc}
        <br/>
        <br/>
        {desc2}
      </p>
    )
  }

  peer(desc, desc2) {
    return (
      <Card fluid style={{ "marginTop": "2em", "marginBottom": "1em" }}>
        <Card.Content className={"info-text"}>
          {desc}
          <br/>
          <br/>
          {desc2}
        </Card.Content>
      </Card>
    )
  }

  render_peer() {
    const desc = "At Puppet you aren't just put in the corner and expected to make Tea for the senior engineers. As a Grad/Intern you'll be placed in a team with other engineers and treated as a peer."
    const desc2 = "You'll work on real projects - it's hard work, but if you fancy the challenge we'd like to hear from you!"
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.peer_mobile(desc, desc2)}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.peer(desc, desc2)}
      </Responsive>]
    )
  }


  render() {
    return (
      <div className="App">
        {this.responsive_image('divider1')}
        <Header as="h1" dividing>Welcome to Puppet</Header>
        <div className={"content"}>
          <Grid container style={{ 'padding': '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                {this.render_interested()}

                {this.render_register(false)}

                {this.render_meet_team()}

                <Divider />

                <Message info style={{ "marginTop": "1em" }} className={"info-text"}>
                  <Message.Header>
                    Technologies
                </Message.Header>
                  <Message.Content>
                    <p>
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
        {this.responsive_image('divider2')}
        <div className={"content"}>
          <Grid container style={{ padding: '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>

                <Message info style={{ "marginTop": "1em" }} className={"info-text"}>
                  <Message.Header as="h1">
                    Fun
                  </Message.Header>
                  <Message.Content>
                    <p>
                      We aren’t just about the work; we like to play too! Our main headquarters is in Portland, Oregon, with the Belfast office being the second biggest in the world. It's fantastic to work here - with a city centre office location; we get up to all sorts of fun activities:
                    </p>
                    <List bulleted>
                      <List.Item>Free lunch once a week</List.Item>
                      <List.Item>Breakfast baps on Fridays</List.Item>
                      <List.Item>Fruit, snacks</List.Item>
                      <List.Item>Free beer (with beer tastings to choose the next batch)</List.Item>
                      <List.Item>Lego, games consoles, board games</List.Item>
                      <List.Item>A state-of-the-art coffee machine</List.Item>
                      <List.Item>Most importantly -Pop by at our booth, the first few to say the password 'Miku' will get special freebies.</List.Item>
                    </List>
                  </Message.Content>
                </Message>

                {this.render_peer()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        {this.responsive_image('divider3')}
      </div>
    );
  }
}

export default App;
