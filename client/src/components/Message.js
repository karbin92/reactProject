import React from 'react'

    const Message = ({ Message }) => {
      return (
        <div>
          <center><h2>Meddelandeservice Grupp 5</h2></center>
          {Message.map((Message) => (
            <div>
              <div className="card-body">
              <p class="service-card-description">From : {Message.SendingUserId}</p>
                <p class="service-card-description">To : {Message.RecievingUserId}</p>
                <h3 className="card-header">{Message.ServiceTitle}</h3>
                <h4 className="card-response">{Message.Message1}</h4>
                

              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Message