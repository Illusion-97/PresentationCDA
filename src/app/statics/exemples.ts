export interface Exemple {
  content: string,
  type: 'code' | 'image' | 'text'
  label: string,
  link?: string
}

export const SUMMARY_EX : Exemple[] = [
  {
    content:"dawan.png",
    type: "image",
    label: 'The Company'
  },{
    content:`<div class="team">
<div>Director</div>
<div>DERKAOUI Mohamed</div>
</div>
<div class="team">
<div>Project's Manager</div>
<div>BRETECHE Pierre</div>
</div>
<div class="team">
<div>Developers</div>
<div>ADEKALOM Yanis</div>
<div>ANDRIAMBAHINY Tiavina (Nick)</div>
<div>GUILLAUME Clément</div>
<div>RAMBAUD Axel</div>
<div>VADROT Joshua</div>
</div>
<div class="team">
<div>Designers</div>
<div>MAHAMOUDOU Ansaka</div>
<div>VAILLANT César</div>
</div>`,
    type: "text",
    label: 'The Team'
  },{
    content:`<div class="flex-grow-1 d-flex">
<img class="col-5" src="/assets/images/dawan.fr.PNG">
<div class="col-2 flex-column justify-content-center align-items-center d-flex"><i class="fa-solid fa-right-long fs-1"></i></div>
<img class="col-5" src="/assets/images/danews-rec.PNG">
</div>`,
    type: "text",
    label: 'The Project'
  }
]
export const CONTEXT_EX : Exemple[] = [
  {
    content:"dawan.fr.PNG",
    type: "image",
    label: 'Existant',
    link: 'https://www.dawan.fr/'
  },{
    content:`
<div class="button primary fs-3">Gestion et affichage de News et d'Évènements internes</div>
<div class="button primary fs-3">Versionnement des News</div>
<div class="button primary fs-3">Gestion des rubriques de News</div>
<div class="button primary fs-3">Collecte et affichage de News en provenance d'une API publique</div>
<div class="button primary fs-3">Recherche et affichage d'offre d'emploi</div>
<div class="button primary fs-3">Gestion des abonnements à la Newsletter</div>
`,
    type: "text",
    label: 'Fonctionnalités'
  },{
    content:`
<div class="button primary fs-3">Architecture multicouche orientée Services</div>
<div class="button primary fs-3">BackEnd: API REST / Framework: SPRING</div>
<div class="button primary fs-3">Système de Gestion de Base de Données : MariaDB</div>
<div class="button primary fs-3">Connexion via Annuaire LDAP</div>
<div class="button primary fs-3">FrontEnd: Application Web / Framework: Angular</div>
<div class="button primary fs-3">Métriques de qualités (Tests OWASP / SonarQube)</div>
<div class="button primary fs-3">Mesures de sécurité (JwToken / Captcha)</div>
`,
    type: "text",
    label: 'Contraintes'
  },
  {
    content:"danews-home.PNG",
    type: "image",
    label: 'Livrables',
    link: 'https://danews.fr/#/'
  }
]
export const ENV_EX : Exemple[] = [
  {
    content:"planning-cda.png",
    type: "image",
    label: 'Panning (24 Semaines)'
  },{
    content:`<div class="team">
<div>Directeur technique</div>
<div>DERKAOUI Mohamed</div>
</div>
<div class="team">
<div>Chef de Projet</div>
<div>BRETECHE Pierre</div>
</div>
<div class="team">
<div>Équipe Développeurs</div>
<div>ADEKALOM Yanis</div>
<div>ANDRIAMBAHINY Tiavina (Nick)</div>
<div>GUILLAUME Clément</div>
<div>RAMBAUD Axel</div>
<div>VADROT Joshua</div>
</div>
<div class="team">
<div>Équipe UI</div>
<div>MAHAMOUDOU Ansaka</div>
<div>VAILLANT César</div>
</div>`,
    type: "text",
    label: 'Équipe'
  },{
    content:`<div class="team">
<div>Communication</div>
<div>Discord <i class="fa-brands fa-discord"></i></div>
<div>Microsoft Teams <i class="fa-solid fa-comments"></i></div>
<div>Webmail Dawan <i class="fa-solid fa-square-envelope"></i></div>
</div>
<div class="team">
<div>Environnement de Développement</div>
<div>JetBrains IntelliJ <i class="fa-solid fa-laptop-code"></i></div>
</div>
<div class="team">
<div>Gestion de Code</div>
<div>Git <i class="fa-brands fa-git"></i></div>
<div>GitLab <i class="fa-brands fa-gitlab"></i></div>
<div>SonarLint <i class="fa-brands fa-searchengin"></i></div>
</div>`,
    type: "text",
    label: 'Technique'
  },{
    content:`day.png`,
    type: "image",
    label: 'Organisation'
  }
]
export const SPEC_EX : Exemple[] = [
  {
    content:'diag-comp.png',
    type: "image",
    label: 'ST: Composants'
  },{
    content:'spring.png',
    type: "image",
    label: 'ST: Organisation'
  },{
    content:'ucp.png',
    type: "image",
    label: 'SF: UseCase Public'
  },{
    content:"uca.png",
    type: "image",
    label: 'SF: UseCase Admin'
  }
]
export const MAQUE_EX : Exemple[] = [
  {
    content:'routing.png',
    type: "image",
    label: 'Enchainement'
  },{
    content:'maqdev.png',
    type: "image",
    label: 'Maquette (Dev)'
  },{
    content:`<div class="h100 w-100 d-flex">
<div class="col-5 d-flex flex-column">
    <img class="h-50" src="/assets/images/maqui-arch.png">
    <img class="h-50" src="/assets/images/maqui-cod.PNG">
</div>
<div class="col-2 flex-column justify-content-center align-items-center d-flex"><i class="fa-solid fa-right-long fs-1"></i></div>
<img class="col-5" src="/assets/images/maqui.png">
</div>`,
    type: "text",
    label: 'Maquette (UI)'
  },{
    content:'alte.png',
    type: "image",
    label: 'AdminLte'
  }
]
export const CONCEP_EX : Exemple[] = [
  {
    content:`mld.png`,
    type: "image",
    label: 'MLD'
  },{
    content:'spring.png',
    type: "image",
    label: 'Code First'
  },{
    content:`package org.dawan.danews.entities;


import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;
import java.util.List;

/**
 * The type Article.
 */
@Entity // Spécifie que la classe est une entité
public class Article extends BaseEntity implements Auditable {

    @Column(nullable = false) // Spécifie la colonne associée et sa définition
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT") // columnDefinition spécifie le type de données
    private String texte;

    @Column(nullable = false) // nullable = false rends obligatoire la présence de la donnée
    private String description;

    @ManyToOne()
    private User author;
    @OneToMany
    private List<Media> medias;

    @Column(nullable = false)
    private String thumbnail;

    @Column(nullable = false)
    private Date creationOrUpdateDate;
    private Date publicationDate;

    @Column(nullable = false)
    private boolean published;

    @ManyToMany
    private List<Rubrique> rubriques;

    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @OneToMany()
    private List<AuditLogEntry> versionsArticle;

    /**
     * Instantiates a new Article.
     */
    public Article() {
        super();
    }

    /**
     * Gets rubriques.
     *
     * @return the rubriques
     */
    public List<Rubrique> getRubriques() {
        return rubriques;
    }

    /**
     * Sets rubriques.
     *
     * @param rubriques the rubriques
     */
    public void setRubriques(List<Rubrique> rubriques) {
        this.rubriques = rubriques;
    }

    /**
     * Gets title.
     *
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets texte.
     *
     * @return the texte
     */
    public String getTexte() {
        return texte;
    }

    /**
     * Sets texte.
     *
     * @param texte the texte
     */
    public void setTexte(String texte) {
        this.texte = texte;
    }

    /**
     * Gets description.
     *
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets description.
     *
     * @param description the description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets author.
     *
     * @return the author
     */
    public User getAuthor() {
        return author;
    }

    /**
     * Sets author.
     *
     * @param author the author
     */
    public void setAuthor(User author) {
        this.author = author;
    }

    /**
     * Gets medias.
     *
     * @return the medias
     */
    public List<Media> getMedias() {
        return medias;
    }

    /**
     * Sets medias.
     *
     * @param medias the medias
     */
    public void setMedias(List<Media> medias) {
        this.medias = medias;
    }

    /**
     * Gets thumbnail.
     *
     * @return the thumbnail
     */
    public String getThumbnail() {
        return thumbnail;
    }

    /**
     * Sets thumbnail.
     *
     * @param thumbnail the thumbnail
     */
    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    /**
     * Gets creation or update date.
     *
     * @return the creation or update date
     */
    public Date getCreationOrUpdateDate() {
        return creationOrUpdateDate;
    }

    /**
     * Sets creation or update date.
     *
     * @param creationOrUpdateDate the creation or update date
     */
    public void setCreationOrUpdateDate(Date creationOrUpdateDate) {
        this.creationOrUpdateDate = creationOrUpdateDate;
    }

    /**
     * Gets publication date.
     *
     * @return the publication date
     */
    public Date getPublicationDate() {
        return publicationDate;
    }

    /**
     * Sets publication date.
     *
     * @param publicationDate the publication date
     */
    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    /**
     * Is published boolean.
     *
     * @return the boolean
     */
    public boolean isPublished() {
        return published;
    }

    /**
     * Sets published.
     *
     * @param published the published
     */
    public void setPublished(boolean published) {
        this.published = published;
        setPublicationDate(published ? Date.from(Instant.now()) : null);
    }

    /**
     * Gets versions article.
     *
     * @return the versions article
     */
    public List<AuditLogEntry> getVersionsArticle() {
        return versionsArticle;
    }

    /**
     * Sets versions article.
     *
     * @param versionsArticle the versions article
     */
    public void setVersionsArticle(List<AuditLogEntry> versionsArticle) {
        this.versionsArticle = versionsArticle;
    }

}`,
    type: "code",
    label: 'Entité'
  },{
    content:`package org.dawan.danews.repositories;

import org.dawan.danews.dto.GestionArticleDto;
import org.dawan.danews.dto.GestionUserDto;
import org.dawan.danews.dto.SimpleUserDto;
import org.dawan.danews.entities.Article;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

/**
 * The interface Article repository.
 */
public interface IArticleRepository extends JpaRepository<Article, Long> {


    /**
     * Find filtered pageable.
     *
     * @param title      the title
     * @param rubriqueId the rubrique id
     * @param authorId   the author id
     * @param published  the published
     * @param pageable   the pageable
     * @return the list
     */
    @Query(value = "SELECT DISTINCT a " +
            "FROM Article a LEFT JOIN a.author au " +
            "LEFT JOIN a.rubriques r " +
            "WHERE (:title IS NULL OR a.title LIKE %:title%) " +
            "AND (:authorId IS NULL OR au.id= :authorId) " +
            "AND (:rubriqueId IS NULL OR r.id = :rubriqueId) " +
            "AND (:published IS NULL OR a.published = :published) ")
    List<Article> findFilteredPageable(String title, Long rubriqueId, Long authorId, Boolean published, Pageable pageable);

    /**
     * Count filtered.
     *
     * @param title      the title
     * @param rubriqueId the rubrique id
     * @param authorId   the author id
     * @param published  the published
     * @return the long
     */
    @Query(value = "SELECT COUNT(DISTINCT a.id)" +
            "FROM Article a LEFT JOIN a.author au " +
            "LEFT JOIN a.rubriques r " +
            "WHERE (:title IS NULL OR a.title LIKE %:title%) " +
            "AND (:authorId IS NULL OR au.id= :authorId) " +
            "AND (:rubriqueId IS NULL OR r.id = :rubriqueId) " +
            "AND (:published IS NULL OR a.published = :published) ")
    Long countFiltered(String title, Long rubriqueId, Long authorId, Boolean published);

    /**
     * Find top 10 by published is true order by publication date desc list.
     *
     * @return the list
     */
    List<Article> findTop10ByPublishedIsTrueOrderByPublicationDateDesc();

    /**
     * Find by id article.
     *
     * @param id the id
     * @return the article
     */
    Article findById(long id);

    /**
     * Find by texte containing ignore case list.
     *
     * @param texte the texte
     * @return the list
     */
    List<Article> findByTexteContainingIgnoreCase(String texte);

    /**
     * Find by author user name contains ignore case list.
     *
     * @param userName the user name
     * @return the list
     */
    List<Article> findByAuthorUserNameContainsIgnoreCase(String userName);

    /**
     * Find by published is true list.
     *
     * @return the list
     */
    List<Article> findByPublishedIsTrue();

    /**
     * Find by published is false list.
     *
     * @return the list
     */
    List<Article> findByPublishedIsFalse();

    /**
     * Find by rubriques name containing ignore case list.
     *
     * @param name the name
     * @param p    the p
     * @return the list
     */
    List<Article> findByRubriquesNameContainingIgnoreCase(String name, Pageable p);

    /**
     * Find by title containing ignore case list.
     *
     * @param title the title
     * @return the list
     */
    List<Article> findByTitleContainingIgnoreCase(String title);

    /**
     * Find by publication date between list.
     *
     * @param min the min
     * @param max the max
     * @return the list
     */
    List<Article> findByPublicationDateBetween(Date min, Date max);

    /**
     * Find top 10 by order by publication date desc list.
     *
     * @return the list
     */
    List<Article> findTop10ByOrderByPublicationDateDesc();

    /**
     * Find by publication date is between and published is true order by publication date asc list.
     *
     * @param publicationDateStart the publication date start
     * @param publicationDateEnd   the publication date end
     * @return the list
     */
    List<Article> findByPublicationDateIsBetweenAndPublishedIsTrueOrderByPublicationDateAsc(Date publicationDateStart, Date publicationDateEnd);

    /**
     * Count article group by list.
     *
     * @param pageable the pageable
     * @return the list
     */
    @Query(value = "SELECT new org.dawan.danews.dto.GestionUserDto(u.id, u.userName, u.role, u.version ,COUNT(a.author.id))" +
            " FROM User u LEFT JOIN u.articles a" +
            " GROUP BY u.id" +
            " ORDER BY u.userName")
    List<GestionUserDto> countArticleGroupBy(Pageable pageable);

    /**
     * Find gestion dto filtered pageable list.
     *
     * @param title      the title
     * @param rubriqueId the rubrique id
     * @param authorId   the author id
     * @param published  the published
     * @param pageable   the pageable
     * @return the list
     */
    @Query(value = "SELECT DISTINCT new org.dawan.danews.dto.GestionArticleDto(a.id, a.title, au.userName, size(a.medias), a.creationOrUpdateDate, a.publicationDate, a.published, size(a.versionsArticle)) " +
            "FROM Article a LEFT JOIN a.author au " +
            "LEFT JOIN a.rubriques r " +
            "WHERE (:title IS NULL OR a.title LIKE %:title%) " +
            "AND (:authorId IS NULL OR au.id= :authorId) " +
            "AND (:rubriqueId IS NULL OR r.id = :rubriqueId) " +
            "AND (:published IS NULL OR a.published = :published) ")
    List<GestionArticleDto> findGestionDtoFilteredPageable(String title, Long rubriqueId, Long authorId, Boolean published, Pageable pageable);

    /**
     * Find by rubriques name containing ignore case and published list.
     *
     * @param rubriqueName the rubrique name
     * @param published    the published
     * @param p            the p
     * @return the list
     */
    List<Article> findByRubriquesNameContainingIgnoreCaseAndPublished(String rubriqueName, Boolean published,
                                                                      Pageable p);

    /**
     * Find by rubriques name containing ignore case and published and author id list.
     *
     * @param rubriqueName the rubrique name
     * @param published    the published
     * @param authorId     the author id
     * @param p            the p
     * @return the list
     */
    @Query("SELECT a FROM Article a JOIN FETCH a.author u JOIN FETCH a.rubriques r WHERE u.id = :authorId AND r.name= :rubriqueName AND a.published = :published")
    List<Article> findByRubriquesNameContainingIgnoreCaseAndPublishedAndAuthorId(String rubriqueName,
                                                                                 Boolean published, long authorId, Pageable p);

    /**
     * Find by medias id article.
     *
     * @param id the id
     * @return the article
     */
    Article findByMedias_Id(long id);

    /**
     * Find by author id list.
     *
     * @param id the id
     * @return the list
     */
    List<Article> findByAuthorId(long id);

    /**
     * Count by published is true and rubriques name like and publication date is after long.
     *
     * @param name            the name
     * @param publicationDate the publication date
     * @return the long
     */
    long countByPublishedIsTrueAndRubriquesNameLikeAndPublicationDateIsAfter(String name, Date publicationDate);

    /**
     * Count by published is true and rubriques name like long.
     *
     * @param name the name
     * @return the long
     */
    long countByPublishedIsTrueAndRubriquesNameLike(String name);

    /**
     * Find by published is true and rubriques name like and publication date is after order by publication date desc list.
     *
     * @param name            the name
     * @param publicationDate the publication date
     * @param p               the p
     * @return the list
     */
    List<Article> findByPublishedIsTrueAndRubriquesNameLikeAndPublicationDateIsAfterOrderByPublicationDateDesc(String name, Date publicationDate, Pageable p);

    /**
     * Find by published is true and rubriques name like order by publication date desc list.
     *
     * @param name the name
     * @param p    the p
     * @return the list
     */
    List<Article> findByPublishedIsTrueAndRubriquesNameLikeOrderByPublicationDateDesc(String name, Pageable p);

    /**
     * Gets authors.
     *
     * @return the authors
     */
    @Query(value = "SELECT DISTINCT new org.dawan.danews.dto.SimpleUserDto(u.id, u.userName)" +
            " FROM Article a JOIN a.author u")
    List<SimpleUserDto> getAuthors();

    /**
     * Count by author is null long.
     *
     * @return the long
     */
    long countByAuthorIsNull();

    /**
     * Find similar list.
     *
     * @param id   the id
     * @param page the page
     * @return the list
     */
    @Query("SELECT DISTINCT a FROM Article a JOIN a.rubriques r WHERE a.id <> :id AND a.published = true AND r.id IN " +
            "(SELECT ru.id FROM Article ar JOIN ar.rubriques ru  WHERE ar.id = :id)")
    List<Article> findSimilar(long id, Pageable page);

    /**
     * Search list.
     *
     * @param filter the filter
     * @return the list
     */
    @Query(value = "SELECT DISTINCT a " +
            "FROM Article a " +
            "WHERE a.published = true " +
            "AND (a.title LIKE %:filter% " +
            "OR a.description LIKE %:filter%) ")
    List<Article> search(String filter);

    /**
     * Search count long.
     *
     * @param filter the filter
     * @return the long
     */
    @Query(value = "SELECT COUNT(DISTINCT a.id)" +
            "FROM Article a " +
            "WHERE a.published = true " +
            "AND (a.title LIKE %:filter% " +
            "OR a.description LIKE %:filter%) ")
    long searchCount(String filter);
}
`,
    type: "code",
    label: 'Repository'
  },{
    content:`#configuration de la datasource
spring.sql.init.mode=always
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.datasource.url=\${SPRING_DATASOURCE_URL}
spring.datasource.username=\${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=\${SPRING_DATASOURCE_PASSWORD}
#config de JPA/Hibernate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect
spring.jpa.properties.javax.persistence.schema-generation.create-source=metadata
spring.jpa.properties.javax.persistence.schema-generation.scripts.action=create
spring.jpa.properties.javax.persistence.schema-generation.scripts.create-target=create.sql
`,
    type: "code",
    label: 'Configuration'
  },{
    content:`create table article (id bigint not null auto_increment, version integer not null, creation_or_update_date datetime not null, description TEXT not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id)) engine=InnoDB;
create table article_medias (article_id bigint not null, medias_id bigint not null) engine=InnoDB;
create table article_rubriques (articles_id bigint not null, rubriques_id bigint not null) engine=InnoDB;
create table article_versions_article (article_id bigint not null, versions_article_id bigint not null, versions_article_version bigint not null) engine=InnoDB;
create table article_version (id bigint not null, version bigint not null, creation_or_update_date datetime not null, description TEXT not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id, version)) engine=InnoDB;
create table audit_log_entry (id bigint not null auto_increment, version integer not null, audit_entry_type varchar(255), creation_date datetime, entity_id varchar(255), entity_name varchar(255), field_name varchar(255), new_value varchar(255), old_value varchar(255), user_id varchar(255), primary key (id)) engine=InnoDB;
create table evenement (id bigint not null auto_increment, version integer not null, description varchar(255), titre varchar(255), preview_id bigint, primary key (id)) engine=InnoDB;
create table inscrit (id bigint not null auto_increment, version integer not null, email varchar(255), newsletter bit not null, nom varchar(255), prenom varchar(255), session_id bigint, primary key (id)) engine=InnoDB;
create table media (id bigint not null auto_increment, version integer not null, extension varchar(255), name varchar(255), type varchar(255), primary key (id)) engine=InnoDB;
create table newsletter_email (id bigint not null auto_increment, active bit not null, email varchar(255), primary key (id)) engine=InnoDB;
create table rubrique (id bigint not null auto_increment, version integer not null, color_code varchar(255) not null, name varchar(255) not null, primary key (id)) engine=InnoDB;
create table session (id bigint not null auto_increment, version integer not null, date date, lien varchar(255), evenement_id bigint, primary key (id)) engine=InnoDB;
create table user (id varchar(255) not null, role varchar(255), user_name varchar(255) not null, version integer not null, primary key (id)) engine=InnoDB;
alter table article_medias add constraint UK_88cew8gxwinwy374ijfkclyb4 unique (medias_id);
alter table article_versions_article add constraint UK_712a6pwuqr1kxd0e5d878dxmt unique (versions_article_id, versions_article_version);
alter table article add constraint FKgwrtdbqvt9ucntp82nd3yiuec foreign key (author_id) references user (id);
alter table article_medias add constraint FKbx2k4jg41tjr65ptfv1a2a8sr foreign key (medias_id) references media (id);
alter table article_medias add constraint FKox25rsr36mjbmjmkvcp5751b1 foreign key (article_id) references article (id);
alter table article_rubriques add constraint FK8fubdreyut7rm14qeki5jprbi foreign key (rubriques_id) references rubrique (id);
alter table article_rubriques add constraint FKa6yu4nhvw4x03k0lnumppj8ys foreign key (articles_id) references article (id);
alter table article_versions_article add constraint FK85poaa7rfikpntt961yhq5a6u foreign key (versions_article_id, versions_article_version) references article_version (id, version);
alter table article_versions_article add constraint FK5piv4j4vtqots5hkgsaf1uhss foreign key (article_id) references article (id);
alter table article_version add constraint FKteg9ro7fvsvjad72gnpho5vve foreign key (author_id) references user (id);
alter table evenement add constraint FKhdegyawwnjfimpbpfjx6bbihb foreign key (preview_id) references media (id);
alter table inscrit add constraint FKrq0eh11ovf3nohmy78p00o665 foreign key (session_id) references session (id);
alter table session add constraint FKdrvb3jt5qi4f6msrutg0yqyas foreign key (evenement_id) references evenement (id);
create table article (id bigint not null auto_increment, version integer not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id)) engine=InnoDB;
create table article_medias (article_id bigint not null, medias_id bigint not null) engine=InnoDB;
create table article_rubriques (articles_id bigint not null, rubriques_id bigint not null) engine=InnoDB;
create table article_versions_article (article_id bigint not null, versions_article_id bigint not null, versions_article_version bigint not null) engine=InnoDB;
create table article_version (id bigint not null, version bigint not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id, version)) engine=InnoDB;
create table audit_log_entry (id bigint not null auto_increment, version integer not null, audit_entry_type varchar(255), creation_date datetime, entity_id varchar(255), entity_name varchar(255), field_name varchar(255), new_value varchar(255), old_value varchar(255), user_id varchar(255), primary key (id)) engine=InnoDB;
create table evenement (id bigint not null auto_increment, version integer not null, description varchar(255), titre varchar(255), preview_id bigint, primary key (id)) engine=InnoDB;
create table inscrit (id bigint not null auto_increment, version integer not null, email varchar(255), newsletter bit not null, nom varchar(255), prenom varchar(255), session_id bigint, primary key (id)) engine=InnoDB;
create table media (id bigint not null auto_increment, version integer not null, extension varchar(255), name varchar(255), type varchar(255), primary key (id)) engine=InnoDB;
create table newsletter_email (id bigint not null auto_increment, active bit not null, email varchar(255), primary key (id)) engine=InnoDB;
create table rubrique (id bigint not null auto_increment, version integer not null, color_code varchar(255) not null, name varchar(255) not null, primary key (id)) engine=InnoDB;
create table session (id bigint not null auto_increment, version integer not null, date date, lien varchar(255), evenement_id bigint, primary key (id)) engine=InnoDB;
create table user (id varchar(255) not null, role varchar(255), user_name varchar(255) not null, version integer not null, primary key (id)) engine=InnoDB;
alter table article_medias add constraint UK_88cew8gxwinwy374ijfkclyb4 unique (medias_id);
alter table article_versions_article add constraint UK_712a6pwuqr1kxd0e5d878dxmt unique (versions_article_id, versions_article_version);
alter table article add constraint FKgwrtdbqvt9ucntp82nd3yiuec foreign key (author_id) references user (id);
alter table article_medias add constraint FKbx2k4jg41tjr65ptfv1a2a8sr foreign key (medias_id) references media (id);
alter table article_medias add constraint FKox25rsr36mjbmjmkvcp5751b1 foreign key (article_id) references article (id);
alter table article_rubriques add constraint FK8fubdreyut7rm14qeki5jprbi foreign key (rubriques_id) references rubrique (id);
alter table article_rubriques add constraint FKa6yu4nhvw4x03k0lnumppj8ys foreign key (articles_id) references article (id);
alter table article_versions_article add constraint FK85poaa7rfikpntt961yhq5a6u foreign key (versions_article_id, versions_article_version) references article_version (id, version);
alter table article_versions_article add constraint FK5piv4j4vtqots5hkgsaf1uhss foreign key (article_id) references article (id);
alter table article_version add constraint FKteg9ro7fvsvjad72gnpho5vve foreign key (author_id) references user (id);
alter table evenement add constraint FKhdegyawwnjfimpbpfjx6bbihb foreign key (preview_id) references media (id);
alter table inscrit add constraint FKrq0eh11ovf3nohmy78p00o665 foreign key (session_id) references session (id);
alter table session add constraint FKdrvb3jt5qi4f6msrutg0yqyas foreign key (evenement_id) references evenement (id);
create table article (id bigint not null auto_increment, version integer not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id)) engine=InnoDB;
create table article_medias (article_id bigint not null, medias_id bigint not null) engine=InnoDB;
create table article_rubriques (articles_id bigint not null, rubriques_id bigint not null) engine=InnoDB;
create table article_versions_article (article_id bigint not null, versions_article_id bigint not null, versions_article_version bigint not null) engine=InnoDB;
create table article_version (id bigint not null, version bigint not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id, version)) engine=InnoDB;
create table audit_log_entry (id bigint not null auto_increment, version integer not null, audit_entry_type varchar(255), creation_date datetime, entity_id varchar(255), entity_name varchar(255), field_name varchar(255), new_value varchar(255), old_value varchar(255), user_id varchar(255), primary key (id)) engine=InnoDB;
create table evenement (id bigint not null auto_increment, version integer not null, description varchar(255), titre varchar(255), preview_id bigint, primary key (id)) engine=InnoDB;
create table inscrit (id bigint not null auto_increment, version integer not null, email varchar(255), newsletter bit not null, nom varchar(255), prenom varchar(255), session_id bigint, primary key (id)) engine=InnoDB;
create table media (id bigint not null auto_increment, version integer not null, extension varchar(255), name varchar(255), type varchar(255), primary key (id)) engine=InnoDB;
create table newsletter_email (id bigint not null auto_increment, active bit not null, email varchar(255), primary key (id)) engine=InnoDB;
create table rubrique (id bigint not null auto_increment, version integer not null, color_code varchar(255) not null, name varchar(255) not null, primary key (id)) engine=InnoDB;
create table session (id bigint not null auto_increment, version integer not null, date date, lien varchar(255), evenement_id bigint, primary key (id)) engine=InnoDB;
create table user (id varchar(255) not null, role varchar(255), user_name varchar(255) not null, version integer not null, primary key (id)) engine=InnoDB;
alter table article_medias add constraint UK_88cew8gxwinwy374ijfkclyb4 unique (medias_id);
alter table article_versions_article add constraint UK_712a6pwuqr1kxd0e5d878dxmt unique (versions_article_id, versions_article_version);
alter table article add constraint FKgwrtdbqvt9ucntp82nd3yiuec foreign key (author_id) references user (id);
alter table article_medias add constraint FKbx2k4jg41tjr65ptfv1a2a8sr foreign key (medias_id) references media (id);
alter table article_medias add constraint FKox25rsr36mjbmjmkvcp5751b1 foreign key (article_id) references article (id);
alter table article_rubriques add constraint FK8fubdreyut7rm14qeki5jprbi foreign key (rubriques_id) references rubrique (id);
alter table article_rubriques add constraint FKa6yu4nhvw4x03k0lnumppj8ys foreign key (articles_id) references article (id);
alter table article_versions_article add constraint FK85poaa7rfikpntt961yhq5a6u foreign key (versions_article_id, versions_article_version) references article_version (id, version);
alter table article_versions_article add constraint FK5piv4j4vtqots5hkgsaf1uhss foreign key (article_id) references article (id);
alter table article_version add constraint FKteg9ro7fvsvjad72gnpho5vve foreign key (author_id) references user (id);
alter table evenement add constraint FKhdegyawwnjfimpbpfjx6bbihb foreign key (preview_id) references media (id);
alter table inscrit add constraint FKrq0eh11ovf3nohmy78p00o665 foreign key (session_id) references session (id);
alter table session add constraint FKdrvb3jt5qi4f6msrutg0yqyas foreign key (evenement_id) references evenement (id);
create table article (id bigint not null auto_increment, version integer not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id)) engine=InnoDB;
create table article_medias (article_id bigint not null, medias_id bigint not null) engine=InnoDB;
create table article_rubriques (articles_id bigint not null, rubriques_id bigint not null) engine=InnoDB;
create table article_versions_article (article_id bigint not null, versions_article_id bigint not null, versions_article_version bigint not null) engine=InnoDB;
create table article_version (id bigint not null, version bigint not null, creation_or_update_date datetime not null, description varchar(255) not null, publication_date datetime, published bit not null, texte LONGTEXT not null, thumbnail varchar(255) not null, title varchar(255) not null, author_id varchar(255), primary key (id, version)) engine=InnoDB;
create table audit_log_entry (id bigint not null auto_increment, version integer not null, audit_entry_type varchar(255), creation_date datetime, entity_id varchar(255), entity_name varchar(255), field_name varchar(255), new_value varchar(255), old_value varchar(255), user_id varchar(255), primary key (id)) engine=InnoDB;
create table evenement (id bigint not null auto_increment, version integer not null, description varchar(255), titre varchar(255), preview_id bigint, primary key (id)) engine=InnoDB;
create table inscrit (id bigint not null auto_increment, version integer not null, email varchar(255), newsletter bit not null, nom varchar(255), prenom varchar(255), session_id bigint, primary key (id)) engine=InnoDB;
create table media (id bigint not null auto_increment, version integer not null, extension varchar(255), name varchar(255), type varchar(255), primary key (id)) engine=InnoDB;
create table newsletter_email (id bigint not null auto_increment, active bit not null, email varchar(255), primary key (id)) engine=InnoDB;
create table rubrique (id bigint not null auto_increment, version integer not null, color_code varchar(255) not null, name varchar(255) not null, primary key (id)) engine=InnoDB;
create table session (id bigint not null auto_increment, version integer not null, date date, lien varchar(255), evenement_id bigint, primary key (id)) engine=InnoDB;
create table user (id varchar(255) not null, role varchar(255), user_name varchar(255) not null, version integer not null, primary key (id)) engine=InnoDB;
alter table article_medias add constraint UK_88cew8gxwinwy374ijfkclyb4 unique (medias_id);
alter table article_versions_article add constraint UK_712a6pwuqr1kxd0e5d878dxmt unique (versions_article_id, versions_article_version);
alter table article add constraint FKgwrtdbqvt9ucntp82nd3yiuec foreign key (author_id) references user (id);
alter table article_medias add constraint FKbx2k4jg41tjr65ptfv1a2a8sr foreign key (medias_id) references media (id);
alter table article_medias add constraint FKox25rsr36mjbmjmkvcp5751b1 foreign key (article_id) references article (id);
alter table article_rubriques add constraint FK8fubdreyut7rm14qeki5jprbi foreign key (rubriques_id) references rubrique (id);
alter table article_rubriques add constraint FKa6yu4nhvw4x03k0lnumppj8ys foreign key (articles_id) references article (id);
alter table article_versions_article add constraint FK85poaa7rfikpntt961yhq5a6u foreign key (versions_article_id, versions_article_version) references article_version (id, version);
alter table article_versions_article add constraint FK5piv4j4vtqots5hkgsaf1uhss foreign key (article_id) references article (id);
alter table article_version add constraint FKteg9ro7fvsvjad72gnpho5vve foreign key (author_id) references user (id);
alter table evenement add constraint FKhdegyawwnjfimpbpfjx6bbihb foreign key (preview_id) references media (id);
alter table inscrit add constraint FKrq0eh11ovf3nohmy78p00o665 foreign key (session_id) references session (id);
alter table session add constraint FKdrvb3jt5qi4f6msrutg0yqyas foreign key (evenement_id) references evenement (id);
`,
    type: "code",
    label: 'Script'
  },{
    content:'schema.png',
    type: "image",
    label: 'Schema'
  }
]
export const TOP10_EX : Exemple[] = [
  {
    content:`@Repository
public interface IArticleRepository extends JpaRepository<Article, Long> {
\t...
    /**
     * Find top 10 by published is true order by publication date desc list.
     *
     * @return the list
     */
    List<Article> findTop10ByPublishedIsTrueOrderByPublicationDateDesc();
    ...
}


@Service
@Transactional // Préserve l'intégrité des données en s'assurant du bon déroulement d'une transaction
public class ArticleServiceImpl implements IArticleService {
    @Autowired
    private IArticleRepository articleRepository;
\t...
    @Override
    public List<ArticleDto> findTop10ByOrderByPublicationDateAsc() {
        return articleRepository.findTop10ByPublishedIsTrueOrderByPublicationDateDesc().stream()
                .map(r -> DtoTools.convert(r, ArticleDto.class))
                .collect(Collectors.toList());
    }
\t...
}


@RestController //Définis la classe comme étant un contrôleur capable de gérer des requêtes
@RequestMapping("/articles") //Route gérée par le contrôleur
public class ArticleController {

    private final IArticleService articleService;

    private final APINewsService apiService;

    /**...*/
    @Autowired
    public ArticleController(IArticleService articleService, APINewsService apiService) {
        this.articleService = articleService;
        this.apiService = apiService;
    }
\t...
    /**...*/
    @GetMapping(value = "/top10", produces = "application/json")
    public List<ArticleDto> findTop10ByOrderByPublicationDateAsc() {
        return articleService.findTop10ByOrderByPublicationDateAsc();
    }
\t...
}
`,
    type: "code",
    label: 'BackEnd'
  },{
    content:`@Injectable({...})
export class ArticlesService {
  constructor(private http: HttpClient) {
  }
  ...
  getTop10() : Observable<Article[]> {
    return this.http.get<Article[]>(API_URL + "/articles/top10");
  }
  ...
}

@Component({...})
export class ArticlesComponent implements OnInit {

  rubrique: string = '';
  ...
  articles: Observable<Article[]> = new Observable<Article[]>();
  ...
  requestEnded = false;

  constructor(private route: ActivatedRoute, private service: ArticlesService) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.rubrique = url[0]?.path || '';
      this.onFilterChange()
    })
  }
  ...
  onFilterChange() {
    this.requestEnded = false;
    if (this.rubrique) {...}
    else {
      this.articles = this.finallize(this.service.getTop10());
    }
  }
  ...
  finallize(articles: Observable<Article[]>) : Observable<Article[]> {
    return articles.pipe(finalize(() => this.requestEnded = true));
  }
}


//articles.component.html
...
<article *ngFor="let article of articles|async; let first = first" class="card_article">
  ...
</article>
...`,
    type: "code",
    label: 'FrontEnd',
    link: 'https://danews.fr/#/'
  }
]
export const TEST_EX : Exemple[] = [
  {
    content:`public List<SearchResultDto> Search(String filter, int page, int size) {
        int countFiltered = (int) CurrentsApiTools.countFiltered(filter);
        int countBySearch = (int) eventService.countBySearch(filter);
        int aCount = articleService.countFiltered(getArticleFilter(filter)).intValue();
        return Stream.concat(
                Stream.concat(
                        countBySearch > 0 ?
                                eventService.findByTitleOrDescription(filter, 1, countBySearch).stream()
                                        .map(SearchResultDto::cast)
                                : Stream.empty(),
                        aCount > 0 ?
                                articleService.findFilteredPagable(getArticleFilter(filter), 0, aCount).stream()
                                        .map(SearchResultDto::cast)
                                : Stream.empty()
                ),
                countFiltered > 0 ?
                        CurrentsApiTools.getFilteredArticles(filter, PageRequest.of(0, countFiltered))
                                .map(SearchResultDto::cast).stream()
                        : Stream.empty()
        )//.sorted(Comparator.comparing(SearchResultDto::getDate))
                .skip((page * size)).limit(size)
                .collect(Collectors.toList());
    }`,
    type: "code",
    label: 'Fonctionnalité'
  },{
    content:"test-awaited.PNG",
    type: "image",
    label: 'Entrée / Attente'
  },{
    content:`
<div class="h100 w-100 d-flex">
<div class="col-5 d-flex flex-column">
<div class="team px-1">
<div>Date des évènements nulle</div>
<div>Cause : Gestion du filtrage des évènements en cours de refonte (Nouvelle gestion des Sessions)</div>
<div>Statut : En attente de modifications de la fonctionnalité.</div>
</div>
<div class="team px-1">
<div>Couleur de la carte toujours nulle</div>
<div>Cause : Couleur dépendante de la rubrique d'un article. Cependant il est possible d'en avoir plusieurs ou aucune</div>
<div>Statut : Réévaluation de la pertinence du besoin.</div>
</div>
</div>
<div class="col-2 flex-column justify-content-center align-items-center d-flex"><i class="fa-solid fa-right-long fs-1"></i></div>
<img class="col-5" src="/assets/images/test-result.PNG">
</div>`,
    type: "text",
    label: 'Écarts'
  }
]
export const RECH_EX : Exemple[] = [
  {
    content:"tiny-editor.PNG",
    type: "image",
    label: 'TinyMce Editor'
  },{
    content:`initTinyMce(): RawEditorOptions {
    let parent = this;
    return {
      setup: function(editor) {
        editor.on('keypress', function(e) {
          parent.articleChange();
        });
      },
      selector:'#tinymce-editor',
      base_url: '/tinymce', // Root for resources
      suffix: '.min',
      height: '100%',
      plugins: 'image media link code searchreplace',
      toolbar: 'undo redo | searchreplace | forecolor bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image media | code | wordcount',
      menubar: false,
      statusbar: false,
      file_picker_types: 'image media',
      file_picker_callback: function (cb, val, root) {
        let input = document.createElement("input");
        input.setAttribute('type', 'file');
        input.setAttribute('accept', root['filetype'] === 'image' ? 'image/*' : 'video/*');
        input.onchange = function (this: GlobalEventHandlers, ev: Event) {
          if (parent.article.id) {
            let files = (ev.currentTarget as HTMLInputElement).files
            let progress = 0;
            const t = parent.toastr.info(progress + " %");
            parent.fileService.create(files!.item(0)!, parent.article.id).subscribe({
              next: (event) => {
                if (event.type === HttpEventType.UploadProgress) {
                  let total = event.total ?? 1;
                  progress = Math.round(100 * event.loaded / total);
                  t.message = progress + " %";
                } else if (event instanceof HttpResponse) {
                  if (event.body) {
                    parent.getArticle();
                    cb(root['filetype'] === 'image' ? parent.path : parent.videoPath  + '/' + event.body.id + '.' + event.body.extension);
                  }
                }
              },
              error: (err) => {
                parent.toastr.error(err.body, 'Could not upload the file');
              }
            });
          } else {
            parent.toastr.error("Veuillez sauvegarder l'article une première fois")
          }
        }
        input.click();
      },
      video_template_callback: function(data: any) {
        console.log(data)
        return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls" crossorigin="anonymous">\\n' + '<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' /></video>';
      }
    };
  }`,
    type: "code",
    label: 'TinyMce Init'
  },{
    content:"tiny-doc.PNG",
    type: "image",
    label: 'Documentation'
  },{
    content:"tiny-demo.PNG",
    type: "image",
    label: 'Exemple'
  },{
    content:"tiny-stack.PNG",
    type: "image",
    label: 'Inspiration'
  }
]
export const FUNC_EX : Exemple[] = [
  {
    content:"func-news.PNG",
    type: "image",
    label: 'News',
    link: 'http://localhost:4200/#/WebMaster'
  },
  {
    content:"func-tech.PNG",
    type: "image",
    label: 'Fil Techno',
    link: 'http://localhost:4200/#/Techno'
  },
  {
    content:"func-jobs.PNG",
    type: "image",
    label: 'Recrutements',
    link: 'http://localhost:4200/#/Recrutements'
  },
  {
    content:"func-edit.PNG",
    type: "image",
    label: 'Éditeur',
    link: 'http://localhost:4200/#/Admin/editor/1'
  },
  {
    content:"func-audit.PNG",
    type: "image",
    label: 'Audit',
    link: 'http://localhost:4200/#/Admin/Changes/Article/1'
  },
  {
    content:"func-logs.PNG",
    type: "image",
    label: 'Logs',
    link: 'http://localhost:4200/#/Admin/logs'
  },
]
export const SYNTH_EX : Exemple[] = [
  {
    content:`<div class="button primary fs-3 h-50 m-4 d-flex align-items-center justify-content-center">Evolutions en cours de développement</div>
<div class="button primary fs-3 h-50 m-4 d-flex align-items-center justify-content-center">Styles / Templates / Responsive</div>`,
    type: "text",
    label: 'Difficultés'
  },
  {
    content:`<div class="button primary fs-3 h-50 m-4 d-flex align-items-center justify-content-center">Pratique constante (DaNews / DaEval)</div>
<div class="button primary fs-3 h-50 m-4 d-flex align-items-center justify-content-center">Travail d'équipe</div>`,
    type: "text",
    label: 'Satisfactions'
  },
  {
    content:`<div class="button primary fs-3">DERKAOUI Mohamed</div>
<div class="button primary fs-3">JUSTE Woodson</div>
<div class="button primary fs-3">GUERIN Bruno</div>
<div class="button primary fs-3">VIDONI Valérie</div>
<div class="button primary fs-3">DAWAN (Toulouse)</div>
<div class="button primary fs-3">PROMOTION CDA 2022</div>`,
    type: "text",
    label: 'Remerciements'
  }
]
