const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { ExampleScenarioActorSchema } = require('./ExampleScenarioActor');
const { ExampleScenarioInstanceSchema } = require('./ExampleScenarioInstance');
const { ExampleScenarioProcessSchema } = require('./ExampleScenarioProcess');
const { IdentifierSchema } = require('./Identifier');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   copyright : String,
   purpose : String,
   actor : [ExampleScenarioActorSchema],
   instance : [ExampleScenarioInstanceSchema],
   process : [ExampleScenarioProcessSchema],
   workflow : [String],
   fhirTitle: { type: String, default: 'ExampleScenario' },
});

class ExampleScenario extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioSchema);
    this._type = 'FHIR::ExampleScenario';
  }
};


module.exports.ExampleScenarioSchema = ExampleScenarioSchema;
module.exports.ExampleScenario = ExampleScenario;
