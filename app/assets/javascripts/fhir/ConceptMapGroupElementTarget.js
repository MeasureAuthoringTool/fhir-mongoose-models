const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapEquivalenceSchema } = require('./ConceptMapEquivalence');
const { ConceptMapGroupElementTargetDependsOnSchema } = require('./ConceptMapGroupElementTargetDependsOn');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapGroupElementTargetSchema = BackboneElementSchemaFunction({
   code : String,
   display : String,
   equivalence : ConceptMapEquivalenceSchema,
   comment : String,
   dependsOn : [ConceptMapGroupElementTargetDependsOnSchema],
   product : [ConceptMapGroupElementTargetDependsOnSchema],
   fhirTitle: { type: String, default: 'ConceptMapGroupElementTarget' },
});

class ConceptMapGroupElementTarget extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementTargetSchema);
    this._type = 'FHIR::ConceptMapGroupElementTarget';
  }
};


module.exports.ConceptMapGroupElementTargetSchema = ConceptMapGroupElementTargetSchema;
module.exports.ConceptMapGroupElementTarget = ConceptMapGroupElementTarget;
