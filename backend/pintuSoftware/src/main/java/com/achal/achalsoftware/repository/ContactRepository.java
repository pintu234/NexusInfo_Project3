package com.achal.achalsoftware.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achal.achalsoftware.model.ContactInfo;

public interface ContactRepository extends  JpaRepository<ContactInfo, Long>{

}
