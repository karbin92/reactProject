import React from 'react'
/* Plockar in servicen från grupp 5, eftersom "kund" aldrig har skrivit något så ser vi bara svaret från säljaren i kommentarsfältet, dessutom finns bara "ID" som namn i databasen. Till alla element finns även CSS */
    const Message = ({ Message }) => {
      return (
        <div>
        <h1 className="center3">Meddelandeservice Grupp 5</h1>
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