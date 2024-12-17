import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  QrCodeScanner,
  CameraAlt,
  MoreVert,
  Chat,
  Update,
  Groups,
  Call,
  Add
} from '@mui/icons-material';
import aliceImage from './assets/images/a.jpg';
import bobImage from './assets/images/b.jpg';
import charlieImage from './assets/images/c.jpg';
import davidImage from './assets/images/d.jpg';
import eveImage from './assets/images/e.jpg';
import frankImage from './assets/images/f.jpg';
import graceImage from './assets/images/g.jpg';
import hannahImage from './assets/images/h.jpg';
import ivyImage from './assets/images/i.jpg';
import jackImage from './assets/images/j.jpg';
import karenImage from './assets/images/k.jpg';
import leoImage from './assets/images/l.jpg';
import miaImage from './assets/images/m.jpg';
import ninaImage from './assets/images/n.jpg';
import oscarImage from './assets/images/o.jpg';
import paulImage from './assets/images/p.jpg';
import quinnImage from './assets/images/q.jpg';
import rachelImage from './assets/images/r.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Notification(props) {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div style={styles.notificationCard}>
      <img src={props.image} alt="Profile" style={styles.profileImage} />
      <div style={styles.notificationContent}>
        <h1 style={styles.notificationTitle}>
          {props.username} <span style={styles.notificationTime}>{currentTime}</span>
        </h1>
        <p style={styles.notificationMessage}>{props.message} <span>⭐</span> </p>
      </div>
    </div>
  );
}

const notifications = [
  {
    username: "Alice",
    message: "Hey, how are you?",
    image: aliceImage
  },
  {
    username: "Bob",
    message: "Don't forget the meeting at 3 PM.",
    image: bobImage
  },
  {
    username: "Charlie",
    message: "Can you send me the report?",
    image: charlieImage
  },
  {
    username: "David",
    message: "Great job on the presentation!",
    image: davidImage
  },
  {
    username: "Eve",
    message: "Let's catch up later.",
    image: eveImage
  },
  {
    username: "Frank",
    message: "I need help with the project.",
    image: frankImage
  },
  {
    username: "Grace",
    message: "Happy birthday!",
    image: graceImage
  },
  {
    username: "Hannah",
    message: "Check out this article.",
    image: hannahImage
  },
  {
    username: "Ivy",
    message: "Can you review my code?",
    image: ivyImage
  },
  {
    username: "Jack",
    message: "I'm running late.",
    image: jackImage
  },
  {
    username: "Karen",
    message: "Let's schedule a meeting.",
    image: karenImage
  },
  {
    username: "Leo",
    message: "I have a question about the project.",
    image: leoImage
  },
  {
    username: "Mia",
    message: "Here's the document you requested.",
    image: miaImage
  },
  {
    username: "Nina",
    message: "Can we reschedule our call?",
    image: ninaImage
  },
  {
    username: "Oscar",
    message: "I finished the task.",
    image: oscarImage
  },
  {
    username: "Paul",
    message: "Let's have lunch tomorrow.",
    image: paulImage
  },
  {
    username: "Quinn",
    message: "Please review the latest update.",
    image: quinnImage
  },
  {
    username: "Rachel",
    message: "Are you coming to the event?",
    image: rachelImage
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.mainContainer}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.text}>WhatsApp</h1>
          <div style={styles.headerIcons}>
            <QrCodeScanner style={styles.icon} />
            <CameraAlt style={styles.icon} />
            <MoreVert style={styles.icon} />
          </div>
        </div>
        <input
          type="text"
          placeholder="Ask Meta AI or Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        {filteredNotifications.map((item, index) => (
          <Notification key={index} username={item.username} message={item.message} image={item.image} />
        ))}
        <div style={styles.footer}>
          <Chat style={styles.icon} />
          <Update style={styles.icon} />
          <Groups style={styles.icon} />
          <Call style={styles.icon} />
        </div>
        <div style={styles.floatingButton}>
          <Add style={styles.floatingIcon} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: "black",
    border: "solid 2px black",
    borderRadius: "15px",
    padding: "20px",
    maxWidth: "600px",
    width: '100%',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    color: 'white',
    position: 'relative',
  },
  searchInput: {
    margin: "0px 0px 20px 0px",
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "20px",
  },
  notificationCard: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px"
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    margin: "0",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between"
  },
  notificationTime: {
    fontSize: "small",
    marginLeft: "10px",
  },
  notificationMessage: {
    margin: "0",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between"
  },
  text: {
    color: "white",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  headerIcons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    color: "white",
    margin: "0 10px",
    cursor: "pointer"
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  floatingButton: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    top: "1500px",
    marginLeft:"535px",
    backgroundColor: 'green',
    borderRadius: '15%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    cursor: 'pointer',
  },
  floatingIcon: {
    color: 'white',
    fontSize: '36px',
  }
};

root.render(<App />);
