const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ElementSchema } = require('./Element');
const { IdentifierUseSchema } = require('./IdentifierUse');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const IdentifierSchema = ElementSchemaFunction({
   use : IdentifierUseSchema,
   type : CodeableConceptSchema,
   system : String,
   value : String,
   period : PeriodSchema,
   assigner : ReferenceSchema,
   fhirTitle: { type: String, default: 'Identifier' },
});

class Identifier extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierSchema);
    this._type = 'FHIR::Identifier';
  }
};


module.exports.IdentifierSchema = IdentifierSchema;
module.exports.Identifier = Identifier;
