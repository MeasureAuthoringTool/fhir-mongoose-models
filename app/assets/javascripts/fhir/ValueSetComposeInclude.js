const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ValueSetComposeIncludeConceptSchema } = require('./ValueSetComposeIncludeConcept');
const { ValueSetComposeIncludeFilterSchema } = require('./ValueSetComposeIncludeFilter');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetComposeIncludeSchema = BackboneElementSchemaFunction({
   system : String,
   version : String,
   concept : [ValueSetComposeIncludeConceptSchema],
   filter : [ValueSetComposeIncludeFilterSchema],
   valueSet : [String],
   fhirTitle: { type: String, default: 'ValueSetComposeInclude' },
});

class ValueSetComposeInclude extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeSchema);
    this._type = 'FHIR::ValueSetComposeInclude';
  }
};


module.exports.ValueSetComposeIncludeSchema = ValueSetComposeIncludeSchema;
module.exports.ValueSetComposeInclude = ValueSetComposeInclude;
