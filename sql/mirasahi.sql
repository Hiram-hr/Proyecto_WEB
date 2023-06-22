drop database if exists mirasahi;
create database mirasahi;
use mirasahi;

create table cliente(
    curp char(18) not null primary key,
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
    curp char(18) not null
);

create table menu(
    id_menu int not null primary key auto_increment,
    menu varchar(15) not null,
);

create table menuhora(
    id_hora int not null primary key auto_increment,
    id_menu int not null,
    diasemana int not null,
    hora time not null,
    foreign key (id_menu) references menu(id_menu)
);

create table registros(
    id_registro char(24) not null primary key,
    curp char(18) not null,
    fecha char(12) not null,
    horario char(10) not null,
    evento char(10) not null,
    personas decimal(2) not null,
    id_hora int not null,
    dia date not null,
    foreign key (curp) references cliente(curp);
    foreign key (id_hora) references menuhora(id_hora);
);
