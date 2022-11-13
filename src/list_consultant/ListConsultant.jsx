import React from 'react';
import ConsultantCard from '../components/ConcultantCard/ConsultantCard';
import './ListConsultant.css'
import { CarouserlWrapper } from 'react-pretty-carousel'
import '../components/ConcultantCard/ConsultantCard.css'
// return <ConsultantCardItem card={card} key={card.id} index={index} name={card.name} clients={card.clients} rating={card.rating} earning={card.earning} img_src={card.img_src} />
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ListConsultant = () => {
    let navigate = useNavigate()

    const handle_click = () => {
        navigate("/chat")
    }

    let cards = [{
        name: 'Маслов А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',
    },
    {
        name: 'Кирин А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://www.back2thewind.com/wp-content/uploads/2020/02/testi-2-2.jpg',
    },
    {
        name: 'Шнюков А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://avatars.mds.yandex.net/i?id=d36979301ebc80156f88a6e76602df2a-4580514-images-thumbs&ref=rim&n=33&w=300&h=300',
    },


    ];


    return (
        <div className='content'>

            <div className='list_consultants'>
                {/* {cards.length ? <ConsultantCard cards={cards} /> : <p>Увы, экспертов нет</p>} */}

                <div>
                    <div className='content_card'>
                        <div className="main_info_">
                            <img
                                // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                alt="image"
                            ></img>
                            <div>
                                <h4>Консультант</h4>
                                <h1>Маслов А.И.</h1>
                            </div>
                        </div>

                        <div className="round_rating_">
                            <h3>Индекс доверия</h3>
                            <div>
                                A+
                            </div>
                        </div>
                        <div className="quantity_clients">
                            <h3 className="label">Количество клиентов</h3>
                            <h3 className="data">40</h3>
                        </div>
                        <div className="rating">
                            <h3 className="label">Средняя оценка</h3>
                            <h3 className="data">4.8</h3>
                        </div>
                        <div className="earning">
                            <h3 className="label">Средняя доходность</h3>
                            <h3 className="data">+20%</h3>
                        </div>
                        <Button
                        onClick={() => {
                            handle_click()
                        }}
                        style={{ marginTop: 15, backgroundColor: "#39B6EC", marginLeft: 'auto' ,textTransform: "none"}}
                        variant="contained"
                        disableElevation
                    >
                        Написать
                    </Button>
                    </div>
                    


                </div>

                <div>
                    <div className='content_card'>
                        <div className="main_info_">
                            <img
                                // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                src="https://www.back2thewind.com/wp-content/uploads/2020/02/testi-2-2.jpg"
                                alt="image"
                            ></img>
                            <div>
                                <h4>Консультант</h4>
                                <h1>Кирин А.И.</h1>
                            </div>
                        </div>

                        <div className="round_rating_">
                            <h3>Индекс доверия</h3>
                            <div>
                                A+
                            </div>
                        </div>
                        <div className="quantity_clients">
                            <h3 className="label">Количество клиентов</h3>
                            <h3 className="data">40</h3>
                        </div>
                        <div className="rating">
                            <h3 className="label">Средняя оценка</h3>
                            <h3 className="data">4.8</h3>
                        </div>
                        <div className="earning">
                            <h3 className="label">Средняя доходность</h3>
                            <h3 className="data">+20%</h3>
                        </div>
                        <Button
                        onClick={() => {
                            handle_click()
                        }}
                        style={{ marginTop: 15, backgroundColor: "#39B6EC", marginLeft: 'auto' ,textTransform: "none"}}
                        variant="contained"
                        disableElevation
                    >
                        Написать
                    </Button>
                    </div>


                </div>

                <div>
                    <div className='content_card'>
                        <div className="main_info_">
                            <img
                                // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                src="https://avatars.mds.yandex.net/i?id=d36979301ebc80156f88a6e76602df2a-4580514-images-thumbs&ref=rim&n=33&w=300&h=300"
                                alt="image"
                            ></img>
                            <div>
                                <h4>Консультант</h4>
                                <h1>Шнюков А.И.</h1>
                            </div>
                        </div>

                        <div className="round_rating_">
                            <h3>Индекс доверия</h3>
                            <div>
                                A+
                            </div>
                        </div>
                        <div className="quantity_clients">
                            <h3 className="label">Количество клиентов</h3>
                            <h3 className="data">40</h3>
                        </div>
                        <div className="rating">
                            <h3 className="label">Средняя оценка</h3>
                            <h3 className="data">4.8</h3>
                        </div>
                        <div className="earning">
                            <h3 className="label">Средняя доходность</h3>
                            <h3 className="data">+20%</h3>
                        </div>
                        <Button
                        onClick={() => {
                            handle_click()
                        }}
                        style={{ marginTop: 15, backgroundColor: "#39B6EC", marginLeft: 'auto' ,textTransform: "none"}}
                        variant="contained"
                        disableElevation
                    >
                        Написать
                    </Button>
                    </div>



                </div>

                <div>
                    <div className='content_card'>
                        <div className="main_info_">
                            <img
                                // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                alt="image"
                            ></img>
                            <div>
                                <h4>Консультант</h4>
                                <h1>Маслов А.И.</h1>
                            </div>
                        </div>

                        <div className="round_rating_">
                            <h3>Индекс доверия</h3>
                            <div>
                                A+
                            </div>
                        </div>
                        <div className="quantity_clients">
                            <h3 className="label">Количество клиентов</h3>
                            <h3 className="data">40</h3>
                        </div>
                        <div className="rating">
                            <h3 className="label">Средняя оценка</h3>
                            <h3 className="data">4.8</h3>
                        </div>
                        <div className="earning">
                            <h3 className="label">Средняя доходность</h3>
                            <h3 className="data">+20%</h3>
                        </div>
                        <Button
                        onClick={() => {
                            handle_click()
                        }}
                        style={{ marginTop: 15, backgroundColor: "#39B6EC", marginLeft: 'auto' ,textTransform: "none"}}
                        variant="contained"
                        disableElevation
                    >
                        Написать
                    </Button>
                    </div>


                </div>

                <div>
                    <div className='content_card'>
                        <div className="main_info_">
                            <img
                                // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                                alt="image"
                            ></img>
                            <div>
                                <h4>Консультант</h4>
                                <h1>Маслов А.И.</h1>
                            </div>
                        </div>

                        <div className="round_rating_">
                            <h3>Индекс доверия</h3>
                            <div>
                                A+
                            </div>
                        </div>
                        <div className="quantity_clients">
                            <h3 className="label">Количество клиентов</h3>
                            <h3 className="data">40</h3>
                        </div>
                        <div className="rating">
                            <h3 className="label">Средняя оценка</h3>
                            <h3 className="data">4.8</h3>
                        </div>
                        <div className="earning">
                            <h3 className="label">Средняя доходность</h3>
                            <h3 className="data">+20%</h3>
                        </div>
                        <Button
                        onClick={() => {
                            handle_click()
                        }}
                        style={{ marginTop: 15, backgroundColor: "#39B6EC", marginLeft: 'auto' ,textTransform: "none"}}
                        variant="contained"
                        disableElevation
                    >
                        Написать
                    </Button>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default ListConsultant;
