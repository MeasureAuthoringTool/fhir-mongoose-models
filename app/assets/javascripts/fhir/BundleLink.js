const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleLinkSchema = BackboneElementSchemaFunction({
   relation : String,
   url : String,
   fhirTitle: { type: String, default: 'BundleLink' },
});

class BundleLink extends mongoose.Document {
  constructor(object) {
    super(object, BundleLinkSchema);
    this._type = 'FHIR::BundleLink';
  }
};


module.exports.BundleLinkSchema = BundleLinkSchema;
module.exports.BundleLink = BundleLink;
