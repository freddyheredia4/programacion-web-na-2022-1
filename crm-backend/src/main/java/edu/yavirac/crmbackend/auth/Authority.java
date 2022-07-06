package edu.yavirac.crmbackend.auth;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("authorities")
public class Authority {
    
    @Id
    @Column("authority_id")
    private long authorityId;
    private String name;

}
