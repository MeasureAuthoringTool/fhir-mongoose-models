const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupElementTargetSchema } = require('./ConceptMapGroupElementTarget');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapGroupElementSchema = BackboneElementSchemaFunction({
   code : String,
   display : String,
   target : [ConceptMapGroupElementTargetSchema],
   fhirTitle: { type: String, default: 'ConceptMapGroupElement' },
});

class ConceptMapGroupElement extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementSchema);
    this._type = 'FHIR::ConceptMapGroupElement';
  }
};


module.exports.ConceptMapGroupElementSchema = ConceptMapGroupElementSchema;
module.exports.ConceptMapGroupElement = ConceptMapGroupElement;
