FROM node

RUN git clone https://github.com/vitalik-lapushkin/busyList.git \
    && cd busyList/back \
    && npm i

WORKDIR busyList/back

CMD npm run start

EXPOSE 3000