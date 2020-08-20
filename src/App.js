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
  Card
} from 'semantic-ui-react';

class App extends Component {
  imagePath = process.env.PUBLIC_URL + '/assets/'
  mobileMaxWidth = "459"
  desktopMinWidth = "600"

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
    let desc = "If you like unique opportunities, want to grow your knowledge and work with cutting edge software then we’d like to hear from you! Here at Puppet we pride ourselves in creating a kick-ass culture to help students like you to start out strong in your software career. With each placement we aim to provide the opportunity of a future full-time job after graduation. Click below to apply for a placement or graduate role."
    let button = (<Button color="yellow" as="a" href={"https://puppet.com/company/careers/jobs?gh_jid=1868369"}>
      Apply for Placement
            </Button>)

    if (((new Date()).getTime() / 1000) < 1572307200) {
      desc = "If you like unique opportunities, want to grow your knowledge and work with cutting edge software then we’d like to hear from you! Here at Puppet we pride ourselves in creating a kick-ass culture to help students like you to start out strong in your software career. With each placement we aim to provide the opportunity of a future full-time job after graduation. Let us know you're interested by clicking below"
      button = (<Button color="yellow" as="a" href={"https://puppetbelfast.typeform.com/to/Lh3oWC"}>
        I'm interested!
        </Button>)
    } else if (((new Date()).getTime() / 1000) > 1572998400) {
      button = (<Button disabled color="yellow" as="a" href={"https://puppet.com/company/careers/jobs?gh_jid=1868369"}>
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
    const date = "Date: 29th October 2019 @ 6pm"
    const desc = "We are holding an open night Meetup for Interns to get a feel for Puppet and to experience how we work here, enjoy some drinks and pizza."
    const desc2 = "There will be plenty of fellow engineers around for a chat, and we do not believe in stupid questions here :) If you are currently studying computing or a software related degree and are interested in a placement year, join to meet the team and find out more about working for Puppet! If we don't already have your details, Click \"I'm Interested!\" and let us know if you are attending!"
    if (((new Date()).getTime() / 1000) < 1572998400) {
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

  }

  mobile_pups() {
    const availableDogImages = ['miku_needs_you.jpg', 'rosie.jpg', 'poppy.jpg', 'betty.jpg', 'kula.jpg', 'darwin.jpg']
    let selectedDogImages = []
    for (var i = availableDogImages.length - 1; i >= 4; i--) {
      const dog = availableDogImages.splice(Math.floor(Math.random() * availableDogImages.length), 1)
      selectedDogImages.push(dog)
    }

    const dogOutput = selectedDogImages.map((dog) => {
      return (
        <Grid.Column>
          <Image src={`${this.imagePath}${dog}`} />
        </Grid.Column>
      )
    })

    return (
      <Grid columns={2} style={{ textAlign: "center", margin: "auto" }}>
        <Grid.Row>
          {dogOutput}
        </Grid.Row>
      </Grid>

    )
  }

  desktop_pups() {
    const availableDogImages = ['miku_needs_you.jpg', 'rosie.jpg', 'poppy.jpg', 'betty.jpg', 'kula.jpg', 'darwin.jpg']
    let selectedDogImages = []
    for (var i = availableDogImages.length - 1; i >= 3; i--) {
      const dog = availableDogImages.splice(Math.floor(Math.random() * availableDogImages.length), 1)
      selectedDogImages.push(dog)
    }

    const dogOutput = selectedDogImages.map((dog) => {
      return (
        <Grid.Column>
          <Image src={`${this.imagePath}${dog}`} />
        </Grid.Column>
      )
    })

    return (
      <Grid columns={3} divided style={{ textAlign: "center" }}>
        <Grid.Row>
          {dogOutput}
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

  // choose 3 dogs at random
  render_meet_team() {
    const title = "Meet the Team"
    const desc = "Puppet is a dog friendly office. These are some of the pups that might come in from time to time."
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

  render_learning() {
    const desc = "As an intern you won't be required to know most of the technologies above. The main thing we will expect of you as a placement student is to learn. You will be paired with a mentor to help you get familiar with these technologies. You will also have your team to support you and help you reach your potential as an engineer."
    return (
      <p style={{ "lineHeight": "1.7" }} className={"info-text ui-section"}>
        {desc}
      </p>
    )
  }

  mobile_office() {
    const availableOfficeImages = ['office_img_1.jpg', 'office_img_2.jpg', 'office_img_3.jpg', 'office_img_4.jpg', 'office_img_5.jpg', 'office_img_6.jpg', 'office_img_7.jpg', 'office_img_8.jpg']
    let selectedOfficeImages = []
    for (var i = availableOfficeImages.length - 1; i >= 6; i--) {
      const dog = availableOfficeImages.splice(Math.floor(Math.random() * availableOfficeImages.length), 1)
      selectedOfficeImages.push(dog)
    }

    const officeOutput = selectedOfficeImages.map((office) => {
      return (
        <Grid.Column>
          <Image src={`${this.imagePath}${office}`} />
        </Grid.Column>
      )
    })

    return (
      <Grid columns={2} divided style={{ textAlign: "center" }}>
        <Grid.Row>
          {officeOutput}
        </Grid.Row>
      </Grid>
    )
  }

  desktop_office() {
    const availableOfficeImages = ['office_img_1.jpg', 'office_img_2.jpg', 'office_img_3.jpg', 'office_img_4.jpg', 'office_img_5.jpg', 'office_img_6.jpg', 'office_img_7.jpg', 'office_img_8.jpg']
    let selectedOfficeImages = []
    for (var i = availableOfficeImages.length - 1; i >= 5; i--) {
      const dog = availableOfficeImages.splice(Math.floor(Math.random() * availableOfficeImages.length), 1)
      selectedOfficeImages.push(dog)
    }

    const officeOutput = selectedOfficeImages.map((office) => {
      return (
        <Grid.Column>
          <Image src={`${this.imagePath}${office}`} />
        </Grid.Column>
      )
    })

    return (
      <Grid columns={3} divided style={{ textAlign: "center" }}>
        <Grid.Row>
          {officeOutput}
        </Grid.Row>
      </Grid>
    )
  }

  render_office_images() {
    return (
      [<Responsive maxWidth={this.mobileMaxWidth}>
        {this.mobile_office()}
      </Responsive>,
      <Responsive minWidth={this.desktopMinWidth}>
        {this.desktop_office()}
      </Responsive>]
    )
  }

  render_activity_images() {
    return (
      <div style={{ "marginTop": "2em", "textAlign": "left" }} className={"ui-section"}>
        <p>
          {this.render_office_images()}
        </p>
        <br />
      </div>
    )
  }

  render_peer() {
    const desc = "At Puppet you aren't just put in the corner and expected to make coffee for the senior engineers. As a Intern you'll be placed in a team with other engineers and treated as a peer."
    const desc2 = "You'll work on real projects - it's hard work, but if you fancy the challenge we'd like to hear from you!"
    return (
      <p style={{ "lineHeight": "1.7" }} className={"info-text ui-section"}>
        {desc}
        <br />
        <br />
        {desc2}
      </p>
    )
  }


  // link to kezzie blog
  // add summary about inernships from puppet website / replace openner
  // mention agile and team structures. 

  render() {
    return (
      <div className="App">
        {this.responsive_image('divider1')}
        <Header as="h1" style={{ "paddingBottom": "1em" }} dividing>Welcome to Puppet</Header>
        <br />
        <div className={"content"}>
          <Grid container style={{ 'padding': '1em 0em' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                {this.render_interested()}
                {this.render_register()}
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
                    <p style={{ "lineHeight": "1.7" }}>
                      You will also learn about agile methodologies and gain experience working in an agile environment.
                    </p>
                  </Message.Content>
                </Message>
                {this.render_learning()}
                {this.render_peer()}
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
                      <List.Item>Regular social events, such as trips to "Let's go Hydro!" and BBQs</List.Item>
                    </List>
                  </Message.Content>
                </Message>
                {this.render_activity_images()}
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
                      <List.Item>OWASP Belfast</List.Item>
                    </List>
                    <p style={{ "lineHeight": "1.7" }}>
                    We also get a number of volunteering days for charities. Over the last few years we have helped the likes of:
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
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header style={{ textAlign: "left" }}>
                  {"Testimonials"}
                </Header>
                <p style={{ textAlign: "left" }}>
                  {"Don’t just take our word for it.  This is what some of our previous interns had to say about their experience as an intern in Puppet, Belfast:"}
                </p>
                <Card fluid className={"info-text"}>
                  <Card.Content>
                    <p style={{ "lineHeight": "1.7" }}>
                      <i>"Working at Puppet has given me the confidence that I have the ability to be able to complete final year. I now have great friends and mentors that I feel like I can go to if I need help with anything.”</i>
                    </p>
                  </Card.Content>
                  <Card.Content extra>
                    <strong>Claudia</strong>, now in final year at uni, due to return to Puppet in a permanent role in Summer 2020.
                  </Card.Content>
                </Card>
                <Card fluid className={"info-text"}>
                  <Card.Content>
                    <p style={{ "lineHeight": "1.7" }}>
                      <i>“Right from day one I was part of a development team implementing Puppets new products. I got the help and support needed to improve my software engineering skills in areas such as application development, web development, testing and tooling.  As a result of my time in Puppet I have become involved in the local IT culture in belfast and overall have become a much more confident engineer.”</i>
                    </p>
                  </Card.Content>
                  <Card.Content extra>
                    <strong>Luke</strong>, now a permanent employee at Puppet
                  </Card.Content>
                </Card>
                <br />
                <p className={"info-text ui-section"}>
                  If you'd like to read more about working at puppet, one of our previous interns, Kezie, has written about it on our <a href="https://puppet.com/blog/lessons-year-puppet">blog</a>.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>

        <br />
        <br />
        {this.responsive_image('divider3')}
      </div>
    );
  }
}

export default App;
