const mongoose = require('mongoose/browser');
const { ConstraintSeveritySchema } = require('./ConstraintSeverity');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionConstraintSchema = ElementSchemaFunction({
   key : String,
   requirements : String,
   severity : ConstraintSeveritySchema,
   human : String,
   expression : String,
   xpath : String,
   source : String,
   fhirTitle: { type: String, default: 'ElementDefinitionConstraint' },
});

class ElementDefinitionConstraint extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionConstraintSchema);
    this._type = 'FHIR::ElementDefinitionConstraint';
  }
};


module.exports.ElementDefinitionConstraintSchema = ElementDefinitionConstraintSchema;
module.exports.ElementDefinitionConstraint = ElementDefinitionConstraint;
