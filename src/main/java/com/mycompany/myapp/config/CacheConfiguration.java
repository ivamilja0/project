package com.mycompany.myapp.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.mycompany.myapp.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Type.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Article.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.City.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Client.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Vehicle.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Position.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.OnlineOrder.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Employee.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.OnlineOrderItem.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.DeliveryOrder.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.DeliveryOrderItem.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
