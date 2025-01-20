---
title: "Proposal for an .oss gTLD"
description: "This is a proposal to Cloudflare to apply for a gTLD .oss, for the open source community."
date: 2024-12-19
draft: true
---

## 1. Objective and Vision

#### 1.1. Objective

The objective of this proposal is to apply for a [gTLD](https://en.wikipedia.org/wiki/Generic_top-level_domain) similar to existing TLDs such as [`.dev`](https://icannwiki.org/.dev) and [`.codes`](https://icannwiki.org/.codes), however they will be explicitly restricted for use by the [Open Source Community](https://github.com/open-source). The TLD proposed is `.oss`, which stands for **Open Source Software**, a well-known acronym in the community.

This short and sleek TLD would likely become popular among open source developers and projects, similar to `.dev`.

#### 1.2. Vision

The vision for this TLD is to fabricate a TLD for the open source community, providing free subdomains on selected 2LDs (e.g. company<b>.org.oss</b>), whilst offering paid options directly on the second level (e.g. example<b>.oss</b>).

## 2. Structure of the TLD

#### 2.1. TLD Nameservers

##### 2.1.1. Number Of Nameservers

It is recommended to use between **3** and **7** nameservers for a TLD. A minimum of **2** nameservers is required, with a recommended maximum limit of **13** due to the size constraints of DNS packets over UDP (512 bytes).

For `.oss`, a recommended **5** nameservers will be used.

##### 2.1.2. Nameserver Naming Conventions

Only single letter domain names will be used in descending alphabetical order, starting from `a.oss` for nameservers of the TLD, and any 2LDs such as `.org.oss`. For example:
- `a.oss`
- `b.oss`
- `c.oss`
- `d.oss`
- `e.oss`

If all alphabetical names are exhausted, numbered ones will be used in descending order, starting from `0.oss`. For example:
- `0.oss`
- `1.oss`
- `2.oss`
- `3.oss`
- `4.oss`

#### 2.2. Reserved Domain Names

All domain names that meet the following criteria should be reserved to ensure infrastructure functionality and prevent misuse:

- Domains with a single letter (e.g. `a.oss`, `1.oss`) should be reserved for potential infrastructure usage. This includes second-level domains (e.g. `a.org.oss`, `1.dev.oss`).
  - Upon request, assuming the domain name is **not** being actively used by the registry, they may be released as premium domain names, with a higher price than regular `.oss` domain names. 
- Domains that could be used for fraud, phishing, or impersonation must be reserved, including:
  - Registry-related domains: e.g. `registrar.oss`, to prevent impersonation of the registry.
  - Typo-squatting domains: e.g. `or.oss`, which could mislead users or lead to malicious sites.

#### 2.3. Registry Website

The registry website will be located at `dot.oss`.

Domain names that will be reserved, in order to redirect to this domain:
- `gtld.oss`
- `nic.oss`
- `noc.oss`
- `register.oss`
- `registry.oss`
- `tld.oss`
- `www.oss`

## 3. Registration

#### 3.1. Second-level (2LD) Registration

##### 3.1.1. Registration Process

All 2LD's will be free to register. These domain names will be available for registration on a GitHub repository.

The reason for a GitHub repository is because GitHub is a commonly used resource among open source communities, a tool nearly all open source developers are familiar with.

This GitHub repository will be operated similarly to free subdomain registries such as [is-a.dev](https://github.com/is-a-dev/register).

All requests to add subdomains to 2LDs will be routed to this repository, where they will be manually reviewed by a maintainer team. Any open source project can register one, assuming the 2LD applied for matches their use case.

The reason for manual review is to help prevent abuse on these free subdomains.

An example application for a subdomain such as `example.org.oss` will be a pull request, adding a file in the `domains/org.oss/` directory, named `example.json`, which will have the following content:

```json
{
    "registrant": {
        "name": "Example Company LTD",
        "address": {
            "state_province": "IL",
            "country": "US"
        },
        "contact": {
            "email": "admin@example.com",
            "phone": "+15551234567",
            "additional": {
                "facebook": "example-co",
                "twitter": "example_co",
                "instagram": "exampleco"
            }
        },
        "github": {
            "id": "12345678",
            "authorized_ids": ["12345678", "87654321", "24681357"]
        }
    },
    "dns_records": {
        "NS": ["ns1.example.com", "ns2.example.com"],
        "DS": [
            {
                "key_tag": 12345,
                "algorithm": 13,
                "digest_type": 2,
                "digest": "8A9CDB3E23A5B7D5E8CDA7E37F1FA57C57B8358A9E3F7C9D4A1A3EBE4A5C6E7D"
            },
            {
                "key_tag": 54321,
                "algorithm": 8,
                "digest_type": 1,
                "digest": "2A3B4C5D6E7F8A9B0C1D2E3F4A5B6C7D8E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3"
            }
        ]
    },
    "glue_records": [
        {
            "host": "ns1",
            "ipv4_address": "192.0.2.1",
            "ipv6_address": "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
        },
        {
            "host": "ns2",
            "ipv4_address": "198.51.100.1",
            "ipv6_address": "2001:0db8:85a3:0000:0000:8a2e:0370:7335"
        }
    ]
}
```

##### 3.1.2. Description of Application JSON Fields

- `registrant` (*required*) - Contains information about the entity registering the domain.
  - `registrant.name` (*required*) - The name of the company or individual registering the domain.
  - `registrant.address` (*required*) - The physical address of the registrant.
    - `registrant.address.state_province` (*required*) - The state or province where the registrant is located.
    - `registrant.address.country` (*required*) - The country where the registrant is located.
  - `registrant.contact` (*required*) - Contact details for the registrant.
    - `registrant.contact.email` (*required*) - The email address for the registrant.
    - `registrant.contact.phone` (*required*) - The phone number of the registrant.
    - `registrant.contact.additional` (*optional*) - Additional contact information for the registrant.
      - Any field is allowed in this object, assuming it provides a method of contact.
  - `registrant.github` (*required*) - Information about the registrant's GitHub organization.
    - `registrant.github.id` (*required*) - The GitHub user ID of an organization or user.
    - `registrant.github.authorized_ids` (*required*) - A list of authorized representatives' GitHub user account IDs to modify this entry.
- `dns_records` (*required*) - A collection of DNS records for the domain.
  - `dns_records.NS` (*required*) - A list of nameservers associated with the domain.
    - `dns_records.NS[]` (*required*) - Each entry is a fully qualified domain name (FQDN) pointing to a valid nameserver. At least 2 nameservers must be specified.
  - `dns_records.DS` (*optional*) - A list of delegation signer records used to secure the domain's DNS.
    - `dns_records.DS[].key_tag` (*required*) - A unique identifier for the DNSSEC key.
    - `dns_records.DS[].algorithm` (*required*) - The algorithm used to generate the DNSSEC key.
    - `dns_records.DS[].digest_type` (*required*) - The type of hash used for the DNSSEC key.
    - `dns_records.DS[].digest` (*required*) - The hash of the DNSSEC key.
- `glue_records` (*optional*, unless `dns_records.NS[]` contains records pointing to subdomains of the domain name applied for) - An array of hostnames under the domain name with either an IPv4 address, IPv6 address, or both.
  - `glue_records[].host` (*required*) - A subdomain of the domain name being applied for. If the entry is set to `ns1`, and the domain name applied for is `example.org.oss`, the host will be `ns1.example.org.oss`.
  - `glue_records[].ipv4_address` (*optional*, if `ipv6_address` is defined) - An optional field containing a single IPv4 address.
  - `glue_records[].ipv6_address` (*optional*, if `ipv4_address` is defined) - An optional field containing a single IPv6 address.
