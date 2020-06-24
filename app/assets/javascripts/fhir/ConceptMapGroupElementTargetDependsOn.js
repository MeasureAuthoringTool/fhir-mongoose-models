const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapGroupElementTargetDependsOnSchema = BackboneElementSchemaFunction({
   property : String,
   system : String,
   value : String,
   display : String,
   fhirTitle: { type: String, default: 'ConceptMapGroupElementTargetDependsOn' },
});

class ConceptMapGroupElementTargetDependsOn extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementTargetDependsOnSchema);
    this._type = 'FHIR::ConceptMapGroupElementTargetDependsOn';
  }
};


module.exports.ConceptMapGroupElementTargetDependsOnSchema = ConceptMapGroupElementTargetDependsOnSchema;
module.exports.ConceptMapGroupElementTargetDependsOn = ConceptMapGroupElementTargetDependsOn;
