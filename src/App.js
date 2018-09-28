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
} from 'semantic-ui-react';

class App extends Component {
  imagePath = process.env.PUBLIC_URL + '/assets/'
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
      [
        <Responsive {...Responsive.onlyMobile}>
          {this.mobile_pups()}
        </Responsive>,
        <Responsive {...Responsive.onlyTablet}>
          {this.desktop_pups()}
        </Responsive>,
        <Responsive {...Responsive.onlyComputer}>
          {this.desktop_pups()}
        </Responsive>
      ]
    )
  }

  render_register(atTheTop) {
    let desc = "We are holding a Meetup for both Graduates and Interns to get a feel for Puppet and to experience how we work here. Eat pizza, drink beer (including non-alcoholic drinks), and more importantly, have fun! There are plenty of fellow engineers around for a chat, and we do not believe in stupid questions here :) If you are currently studying Computer Science or Software Engineering and are interested in the Graduate/Intern positions, join us for a night of exciting activities! Click 'Sign Up' and let us know if you are attending!"
    return (
      <Card fluid style={{ "marginTop": "2em" }}>
        <Card.Content>
          <Card.Header>
            Puppet Open Doors
            </Card.Header>
          <Card.Meta>
            <span className="date">
              Date: 25th October 2018
              </span>
          </Card.Meta>
          <Card.Description className={"info-text"}>
            {desc}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Click for map:
          <a style={{ color: "#4183c4" }} href="https://goo.gl/maps/7tUVkcgEHLA2"><Icon name="map marker alternate" />Puppet Inc, 4th Floor, 40 Linenhall Street, BT2 8BA</a>
        </Card.Content>
      </Card>
    )
  }

  responsive_image(name) {
    return (
      [
        <Responsive {...Responsive.onlyMobile}>
          <Image alt={name} src={`${this.imagePath}${name}_mobile.jpg`} />
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


  render() {
    return (
      <div className="App">
        {this.responsive_image('divider1')}
        <Header as="h1" dividing>Welcome to Puppet</Header>
        <div className={"content"}>
          <Grid container style={{ 'padding': '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>
                      Interested in joining us?
                  </Card.Header>
                    <Card.Description className={"info-text"}>
                      If you like challenges and want to apply to one of the leading automation companies in the world then we'd like to hear from you!
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Grid columns={1}>
                      <Grid.Column>
                        <Button disabled color="yellow" as="a" href="">
                          Sign Up
                      </Button>
                      </Grid.Column>
                    </Grid>
                  </Card.Content>
                </Card>

                {this.render_register(false)}

                <Card fluid style={{ "marginTop": "2em" }}>
                  <Card.Content>
                    <Card.Header>
                      Meet the Team
                  </Card.Header>
                    <Card.Meta>
                      Puppet is a dog friendly office. Miku is in most days and the others come in too from time to time.
                  </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    {this.render_pups()}
                  </Card.Content>
                </Card>

                <Message info style={{ "marginTop": "2em" }}>
                  <Message.Header>
                    Technologies
                </Message.Header>
                  <Message.Content>
                    <p>
                      At Puppet, you’ll gain experience with a wide range of technologies:
                </p>
                    <List bulleted className={"info-text"} >
                      <List.Item>Cloud/Containers (Docker, AWS, GCP, Azure, OpenStack, Kubernetes)</List.Item>
                      <List.Item>Javascript (Ember.js, React.js)</List.Item>
                      <List.Item>Backend Languages (Go, Clojure)</List.Item>
                      <List.Item>Databases (PostgreSQL, GraphQL)</List.Item>
                      <List.Item>Automated testing (Ruby, Selenium, Nightwatch)</List.Item>
                      <List.Item>DevOps and Configuration Management </List.Item>
                    </List>
                  </Message.Content>
                </Message>

                <Card fluid style={{ "marginTop": "2em", "marginBottom": "1em" }}>
                  <Card.Content className={"info-text"}>
                    We are also an Open Source company and working with us is an excellent way to get your name out in the Open Source community.
                </Card.Content>
                </Card>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        {this.responsive_image('divider2')}
        <div className={"content"}>
          <Grid container style={{ padding: '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>

                <Message info style={{ "marginTop": "1em" }}>
                  <Message.Header as="h1">
                    Fun
                  </Message.Header>
                  <Message.Content>
                    <p>
                      We aren’t just about the work; we like to play too! Our main headquarters is in Portland, Oregon, with the Belfast office being the second biggest in the world. It's fantastic to work here - with a city centre office location; we get up to all sorts of fun activities:
                    </p>
                    <List bulleted className={"info-text"}>
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

                <Card fluid style={{ "marginTop": "2em", "marginBottom": "1em" }}>
                  <Card.Content className={"info-text"}>
                    At Puppet you aren't just put in the corner and expected to make Tea for the senior engineers. As a Grad/Intern you'll be placed in a team with other engineers and treated as a peer.
                    <br />
                    <br />
                    You'll work on real projects - it's hard work, but if you fancy the challenge we'd like to hear from you!
                  </Card.Content>
                </Card>
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
