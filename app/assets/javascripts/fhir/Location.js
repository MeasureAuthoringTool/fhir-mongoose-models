const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { LocationHoursOfOperationSchema } = require('./LocationHoursOfOperation');
const { LocationModeSchema } = require('./LocationMode');
const { LocationPositionSchema } = require('./LocationPosition');
const { LocationStatusSchema } = require('./LocationStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LocationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : LocationStatusSchema,
   operationalStatus : CodingSchema,
   name : String,
   alias : [String],
   description : String,
   mode : LocationModeSchema,
   type : [CodeableConceptSchema],
   telecom : [ContactPointSchema],
   address : AddressSchema,
   physicalType : CodeableConceptSchema,
   position : LocationPositionSchema,
   managingOrganization : ReferenceSchema,
   partOf : ReferenceSchema,
   hoursOfOperation : [LocationHoursOfOperationSchema],
   availabilityExceptions : String,
   endpoint : [ReferenceSchema],
   fhirTitle: { type: String, default: 'Location' },
});

class Location extends mongoose.Document {
  constructor(object) {
    super(object, LocationSchema);
    this._type = 'FHIR::Location';
  }
};


module.exports.LocationSchema = LocationSchema;
module.exports.Location = Location;
