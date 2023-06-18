drop database if exists mirasahi;
create database mirasahi;
use mirasahi;

create table registros(
    id varchar()
    nombre varchar(15) not null,
    appat varchar(15) not null,
    apmat varchar(15) not null,
    calle varchar(15) not null,
    numero decimal(8) not null,
    colonia varchar(20) not null,
    alcaldia varchar(45) not null,
    cp decimal(5) not null,
    estado nvarchar(45) not null,
    correo nvarchar(45) not null,
    telefono decimal(10) not null,
    rfc char(18) not null,
    fecha char(12) not null,
    horario char(10) not null,
    evento char(10) not null,
    personas decimal(2) not null,
    menu char(10) not null
);
