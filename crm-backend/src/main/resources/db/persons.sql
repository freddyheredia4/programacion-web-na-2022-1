-- Table: public.persons

-- DROP TABLE IF EXISTS public.persons;


CREATE SEQUENCE IF NOT EXISTS public.persons_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY persons.id;

ALTER SEQUENCE public.persons_id_seq
    OWNER TO postgres;
    

CREATE TABLE IF NOT EXISTS public.persons
(
    id integer NOT NULL DEFAULT nextval('persons_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default",
    dni character varying COLLATE pg_catalog."default",
    city_id integer,
    CONSTRAINT persons_pkey PRIMARY KEY (id),
    CONSTRAINT fk_city FOREIGN KEY (city_id)
        REFERENCES public.city (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.persons
    OWNER to postgres;