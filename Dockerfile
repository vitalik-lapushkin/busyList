FROM node

RUN git clone https://github.com/vitalik-lapushkin/busyList.git \
    && cd back \
    && npm i

WORKDIR ./back

CMD npm run start

EXPOSE 3000