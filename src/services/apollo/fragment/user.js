import gql from 'graphql-tag';

const UserFragment = gql`
  {
    id
    firstName
    lastName
    fullName
    photo
    gender
    dob
    contact {
      address
      city
      state
      zip
      country
      phone
      timezone
    }
    email
    username
    types
    facility
    patientInfo {
      insuranceName
      insuranceType
      insuranceProvincialBilling
      insuranceExpireDate
      allergies
      medicalHistory
      medication
      sla1
      sla2
      sla3
    }
    note
    title
    status
    workingTime {
      mon {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      tues {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      wed {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      thurs {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      fri {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      sat {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
      sun {
        from {
          h
          m
        }
        to {
          h
          m
        }
        excludeHoliday
      }
    }
  }
`;
export default UserFragment;
