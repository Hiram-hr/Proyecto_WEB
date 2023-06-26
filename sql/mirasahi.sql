drop database if exists mirasahi;
create database mirasahi;
use mirasahi;

create table estado(
    id_estado int not null primary key auto_increment,
    estado varchar(25) not null
);

create table alcaldia(
    id_alcaldia int not null primary key auto_increment,
    alcaldia varchar(25) not null
);

create table menu(
    id_menu int not null primary key auto_increment,
    menu varchar(35) not null
);

create table salon(
    id_salon int not null primary key auto_increment,
    salon varchar(35) not null
);

create table evento(
    id_evento int not null primary key auto_increment,
    evento varchar(25) not null
);

create table menuhora(
    id_horario int not null primary key auto_increment,
    id_salon int not null,
    diasemana int not null,
    hora time not null,
    foreign key (id_salon) references salon(id_salon)
);

create table registros(
    id_registro char(28) not null primary key,
    curp char(18) not null,
    nombre varchar(25) not null,
    appat varchar(25) not null,
    apmat varchar(25) not null,
    calle varchar(25) not null,
    numero decimal(8) not null,
    colonia varchar(25),
    id_alcaldia int not null,
    cp decimal(5) not null,
    id_estado int not null,
    correo nvarchar(45) not null,
    telefono decimal(10) not null,
    personas decimal(3) not null,
    id_horario int not null,
    id_evento int not null,
    otroev varchar(25),
    id_menu int not null,
    dia date not null,
    foreign key (id_menu) references menu (id_menu),
    foreign key (id_alcaldia) references alcaldia (id_alcaldia),
    foreign key (id_estado) references estado (id_estado),
    foreign key (id_horario) references menuhora (id_horario),
    foreign key (id_evento) references evento (id_evento)
);

create table administrador(
    id_admin int not null primary key auto_increment,
    nick varchar(20) not null,
    pass varchar(35) not null

);

insert into evento(evento) values ("Otro");
insert into evento(evento) values ("Bautizo");
insert into evento(evento) values ("Primera Comunión");
insert into evento(evento) values ("XV Años");
insert into evento(evento) values ("Boda");
insert into evento(evento) values ("Cumpleaños");

insert into salon(salon) values ("BlackDJs");
insert into salon(salon) values ("Rank Audio DJs");
insert into salon(salon) values ("Jardín Shady");

insert into menuhora (id_salon, diasemana, hora) values (1, 6, "12:00:00");
insert into menuhora (id_salon, diasemana, hora) values (1, 6, "19:00:00");
insert into menuhora (id_salon, diasemana, hora) values (2, 6, "12:00:00");
insert into menuhora (id_salon, diasemana, hora) values (2, 6, "19:00:00");
insert into menuhora (id_salon, diasemana, hora) values (1, 7, "14:00:00");
insert into menuhora (id_salon, diasemana, hora) values (1, 7, "21:00:00");
insert into menuhora (id_salon, diasemana, hora) values (2, 7, "14:00:00");
insert into menuhora (id_salon, diasemana, hora) values (2, 7, "21:00:00");
insert into menuhora (id_salon, diasemana, hora) values (3, 1, "21:00:00");

insert into menu(menu) values ("Económico");
insert into menu(menu) values ("Ejecutivo");

insert into estado(estado) values ("Distrito Federal");
insert into estado(estado) values ("Aguascalientes");
insert into estado(estado) values ("Baja California");
insert into estado(estado) values ("Baja California Sur");
insert into estado(estado) values ("Campeche");
insert into estado(estado) values ("Coahuila");
insert into estado(estado) values ("Colima");
insert into estado(estado) values ("Chiapas");
insert into estado(estado) values ("Chihuahua");
insert into estado(estado) values ("Durango");
insert into estado(estado) values ("Guanajuato");
insert into estado(estado) values ("Guerrero");
insert into estado(estado) values ("Hidalgo");
insert into estado(estado) values ("Jalisco");
insert into estado(estado) values ("México");
insert into estado(estado) values ("Michoacán");
insert into estado(estado) values ("Morelos");
insert into estado(estado) values ("Nayarit");
insert into estado(estado) values ("Nuevo León");
insert into estado(estado) values ("Oaxaca");
insert into estado(estado) values ("Puebla");
insert into estado(estado) values ("Querétaro");
insert into estado(estado) values ("Quintana Roo");
insert into estado(estado) values ("San Luis Potosí");
insert into estado(estado) values ("Sinaloa");
insert into estado(estado) values ("Sonora");
insert into estado(estado) values ("Tabasco");
insert into estado(estado) values ("Tamaulipas");
insert into estado(estado) values ("Tlaxcala");
insert into estado(estado) values ("Veracruz");
insert into estado(estado) values ("Yucatan");
insert into estado(estado) values ("Zacatecas");

insert into alcaldia(alcaldia) values ("Azcapotzalco");
insert into alcaldia(alcaldia) values ("Coyoacán");
insert into alcaldia(alcaldia) values ("Cuajimalpa de Morelos");
insert into alcaldia(alcaldia) values ("Gustavo A. Madero");
insert into alcaldia(alcaldia) values ("Iztacalco");
insert into alcaldia(alcaldia) values ("Iztapalapa");
insert into alcaldia(alcaldia) values ("La Magdalena Contreras");
insert into alcaldia(alcaldia) values ("Milpa Alta");
insert into alcaldia(alcaldia) values ("Álvaro Obregón");
insert into alcaldia(alcaldia) values ("Tlahuac");
insert into alcaldia(alcaldia) values ("Tlalpan");
insert into alcaldia(alcaldia) values ("Xochimilco");
insert into alcaldia(alcaldia) values ("Benito Juárez");
insert into alcaldia(alcaldia) values ("Cuauhtémoc");
insert into alcaldia(alcaldia) values ("Miguel Hidalgo");
insert into alcaldia(alcaldia) values ("Venustiano Carranza");


