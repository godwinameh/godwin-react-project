import React from 'react';
import './TeamPage.css'; 
import lady1 from '../../assets/lady1.svg'


const teamMembers = [
  { id: 1, name: 'Biola Abinbola', title: 'Founder', imgurl: {lady1} },
  { id: 2, name: 'Biola Abinbola', title: 'Founder', imgUrl: '/path/to/image2.jpg' },
  { id: 3, name: 'Biola Abinbola', title: 'Founder', imgUrl: '/path/to/image3.jpg' },
  { id: 4, name: 'Biola Abinbola', title: 'Founder', imgUrl: '/path/to/image4.jpg' }
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <section className="team-intro">
        <h2>Meet the Team making it Possible</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non. 
          Amet, a ante et cursus vel. Sodales porta porta varius suspendisse faucibus phasellus lectus turpis placerat. Condimentum 
          ultrices diam in vel et faucibus natoque tortor. 
        </p>
      </section>

      <section className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <img src={member.imgUrl} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamPage;
