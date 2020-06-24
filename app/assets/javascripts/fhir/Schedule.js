const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ScheduleSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   serviceCategory : [CodeableConceptSchema],
   serviceType : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   actor : [ReferenceSchema],
   planningHorizon : PeriodSchema,
   comment : String,
   fhirTitle: { type: String, default: 'Schedule' },
});

class Schedule extends mongoose.Document {
  constructor(object) {
    super(object, ScheduleSchema);
    this._type = 'FHIR::Schedule';
  }
};


module.exports.ScheduleSchema = ScheduleSchema;
module.exports.Schedule = Schedule;
